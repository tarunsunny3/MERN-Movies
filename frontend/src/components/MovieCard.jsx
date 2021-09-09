import React, {useState} from 'react';
import axios from 'axios';
import API from '../apiURL';
import AppContext from '../AppContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
    },
    media: {
        maxWidth: "100%",
        height: 200,
        backgroundSize: "cover"
    },
    fav:{
        color: '#444444',
        fontSize: '1.5rem',
        float: "right",
        padding: "3px"
    },
    favChecked:{
        color: "#FF0000"
    },
    paper:{
        width: '90%',
        [theme.breakpoints.down('sm')]:{
            width: "80%",
        },
        backgroundColor: "white",
    },
    modal:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "scroll",
        marginTop: "2%"
    },
    modalMedia:{
        maxWidth: "100%",
        height: 600,
        backgroundSize: "cover"
    },
    expandedCard:{
        width: "100%"
    },
    closeIcon:{
        fontSize: "3rem",
    }
}));
const MovieCard = ({movie, favorite}) => {
    const {user, setLoggedIn, loggedIn} = React.useContext(AppContext);
    const classes = useStyles();
    // const history = useHistory();
    const [detailedMovie, setDetailedMovie] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const handleFavIcon = async (e, imdbID)=>{
        const classList = e.target.classList;
        if(classList.contains(classes.favChecked)){
            classList.remove(classes.favChecked);
            const res = await axios.post('/api/removeFav', {imdbID});
            setLoggedIn(!loggedIn);
            // console.log(res.data);
        }else{
            const res = await axios.post('/api/addFav', {imdbID});
            setLoggedIn(!loggedIn);
            // console.log(res.data);
            classList.add(classes.favChecked);
        }
    }
    const handleMore = async (imdbID)=>{
        setModalOpen(true);
        const res = await axios.get(`${API}&i=${imdbID}&plot=full`);
        // console.log(res.data);
        setDetailedMovie(res.data);
    }
    const modalBody = (
        <Card className={classes.expandedCard}>
      
        <CardActionArea>
      <CardMedia
          className={classes.modalMedia}
          src={process.env.PUBLIC_URL + "/logo192.png"}
          image={detailedMovie.Poster==="N/A" ? (process.env.PUBLIC_URL + "/logo192.png") : detailedMovie.Poster}
          title={detailedMovie.Title}
      >
          <div style={{ width: "200px",  backgroundColor: "white"}}>
            <CloseIcon onClick={()=>setModalOpen(false)} className={classes.closeIcon}/>
          </div>
        
      </CardMedia>
     </CardActionArea>
    <CardContent>
    {
        favorite === undefined && 
        <Typography gutterBottom variant="h5" component="h2">
        <span><i  onClick={(e)=>handleFavIcon(e, detailedMovie.imdbID)} className={`fas fa-heart ${classes.fav}`}></i></span>
          {detailedMovie.Title}
  
        </Typography>
    }
     
      
      <Typography gutterBottom variant="body1"  color="textSecondary" component="p">
              {detailedMovie.Plot}
      </Typography>
      <Typography gutterBottom variant="body1"  color="textSecondary" component="p">
              Genre: {detailedMovie.Genre}
              {
          detailedMovie.imdbRating && 
          <span>
          <Typography style={{float: "right"}} gutterBottom variant="body1"   component="p">
                IMDB rating:  {detailedMovie.imdbRating} <span><i style={{color: "#F98404"}} className="fas fa-3x fa-star"></i></span>
            </Typography>
            </span>
      }
      </Typography>
      {
          detailedMovie.Runtime && 
          <span>
          <Typography gutterBottom variant="body1"   component="p">
                Duration:  {detailedMovie.Runtime}
            </Typography>
            </span>
      }
      
      <Typography gutterBottom variant="body1"  color="textSecondary" component="p">
             Actors:  {detailedMovie.Actors}
      </Typography>
     
     
      <Typography variant="body2" color="textSecondary" component="p">
        Year: {detailedMovie.Year}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      Type: {detailedMovie.Type} 
      </Typography>
    </CardContent>
  <Button variant="contained" onClick={()=>setModalOpen(false)} color="primary" style={{float: "right", marginBottom: '2%', marginRight: "3%"}}>Close</Button>
  </Card>
    );
    return (
        <div>
        {
            user === undefined || user.favoriteMovies === undefined
            ?
           <p>loading....</p> 
            :
        <>
            <Card className={classes.root}>
      
            <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.Poster==="N/A" ? (process.env.PUBLIC_URL + "/logo192.png") : movie.Poster}
          src={process.env.PUBLIC_URL + "/logo192.png"}
          title={movie.Title}
        />
         </CardActionArea>
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
          <span><i  onClick={(e)=>handleFavIcon(e, movie.imdbID)} className={user && user.favoriteMovies.includes(movie.imdbID)? `fas fa-heart ${classes.fav} ${classes.favChecked}`: `fas fa-heart ${classes.fav}` }></i></span>
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Year: {movie.Year}
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Type: {movie.Type} 
          </Typography>
        </CardContent>
    
      <CardActions>
        <Button  variant="contained" color="secondary" onClick={()=>handleMore(movie.imdbID)} color="primary">
          More
        </Button>
      </CardActions>
    </Card>
    <div className={classes.modalDiv}>
    <Modal
    className={classes.modal}
  open={modalOpen}
  onClose={()=>setModalOpen(!modalOpen)}
  aria-labelledby="detailed-movie-modal"
  aria-describedby="detailed-movie-description"
>
<div className={classes.paper}>
  {modalBody}
  </div>
</Modal>

</div>
</>
}
</div>
     
    )
}

export default MovieCard;
