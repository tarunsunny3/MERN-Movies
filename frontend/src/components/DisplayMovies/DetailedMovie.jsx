import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../../apiURL';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
        color: "red"
    }
}));
const DetailedMovie = () => {
    const classes = useStyles();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const {imdbID} = useParams();
    const handleFavIcon = (e)=>{
        // console.log(e.target.classList);
        const classList = e.target.classList;
        if(classList.contains(classes.favChecked)){
            classList.remove(classes.favChecked);
        }else{
            classList.add(classes.favChecked);
        }
    }
    const fetchDetails = async ()=>{
        
        const res = await axios.get(`${API}&i=${imdbID}`);
        // console.log(res.data);
        setMovie(res.data);
    }
    useEffect(()=>{
        setLoading(true);
        fetchDetails();
        setLoading(false);
    }, []);
    return (
        <div>
            {
                loading ?
                <h1>Loading....</h1>
                :
            <Card className={classes.root}>
      
      <CardActionArea>
    <CardMedia
        className={classes.media}
        src={process.env.PUBLIC_URL + "/logo192.png"}
        image={movie.Poster}
        title={movie.Title}
    />
   </CardActionArea>
  <CardContent>
  
    <Typography gutterBottom variant="h5" component="h2">
    <span style={{width: '5px', backgroundColor: "white"}}><i  onClick={(e)=>handleFavIcon(e)} className={`fas fa-heart ${classes.fav}`}></i></span>
      {movie.Title}
    </Typography>
    <Typography gutterBottom variant="body1"  color="textSecondary" component="p">
            {movie.Plot}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Year: {movie.Year}
     
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
    Type: {movie.Type} 
    </Typography>
  </CardContent>

</Card>
}
        </div>
    )
}

export default DetailedMovie
