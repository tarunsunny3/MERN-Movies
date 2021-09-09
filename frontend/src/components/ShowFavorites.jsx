import React, {useEffect, useState} from 'react';
import API from '../apiURL';
import axios from 'axios';
import AppContext  from '../AppContext';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
const ShowFavorites = () => {
    const {user} = React.useContext(AppContext);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const moviesPerPage = 5;
    useEffect(() => {
        const fetchFavorites = async  ()=>{
            let favs = user.favoriteMovies;
            if(favs === undefined) {
                // console.log("YESSS");
                setLoading(true);
                return false;
            }
            let tempResults = [];
            await Promise.all(favs.map(async  (imdbID)=>{
                const res =  await axios.get(`${API}&i=${imdbID}`);
                // console.log("DATTA is ", res.data);
                tempResults.push(res.data);
            }));
            setResults(tempResults);
        }
        setLoading(true);
        fetchFavorites();
        setLoading(false);
    }, [user]);
    if(user === undefined){
        return  <p>Loading....</p>;
    }
    if(user.favoriteMovies === undefined || user.favoriteMovies.length === 0){
        
        return <p>No Favorite movies/series available</p>;
    }
    const indexOfLastMovie = currPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    let currMovies = [];
    //Get current Jobs to be displayed on that particular page
    if(indexOfFirstMovie >= results.length){
      currMovies = results;
    }else{
      currMovies = results.slice(indexOfFirstMovie, indexOfLastMovie);
    }
  
    return (
        <div style={{width: "85vw", marginTop: "5%"}}>
            {
                loading && 
                <p> Loading...</p>
            }
           <Grid style={{marginLeft: "2%"}} container spacing={4} display="flex" justifyContent="center">
                {
                    currMovies.map((item, key)=>(
                       
                        <Grid  key={key} item xs={12} sm={6} md={4}>
                            <MovieCard favorite={true} movie={item} />
                        </Grid>
                    ))
                }
            </Grid>
            {

                Math.ceil(results.length / moviesPerPage) > 1
                &&
                <div style={{marginTop: "5%", marginBottom: "3%", display: "flex", justifyContent: "center"}}>
                <Pagination showFirstButton showLastButton color="primary" count={Math.ceil(results.length / moviesPerPage) } page={currPage} onChange={(event: React.ChangeEvent<unknown>, value: number)=>setCurrPage(value)}></Pagination>
                </div>
            }
           
        </div>
    )
}

export default ShowFavorites
