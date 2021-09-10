import React, {useState, useEffect} from 'react'
import axios from 'axios';
import API from '../../apiURL';
import {Helmet} from 'react-helmet';
import './DisplayMovies.css';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import MovieCard from '../MovieCard';
import Grid from '@material-ui/core/Grid';
import { Link as Scroll } from 'react-scroll';
const StyledInput = withStyles({
    root: {
      '& fieldset': {
          borderColor: '#005792',
        },
        textTransform: 'capitalize',
        '& input:valid:focus + fieldset': {
          borderLeftWidth: 7,
          padding: '4px !important', // override inline-style
      },
    },
  })(TextField);
const DisplayMovies = () => {
    const [search, setSearch] = useState("avengers");
    const [searchResults, setSearchResults] = useState([]);
    const [totalResCount, setTotalCount] = useState(0);
    const [error, setError] = useState(null);
    const [currPage, setCurrPage] = useState(1);
    
    const handlePageChange = async (page)=>{
        setCurrPage(page);
        const url = `${API}s=${search}&page=${page}`;
        const res = await axios.get(url);
        const data = res.data;
        setSearchResults(data.Search);
        console.log("Search is ", search, data);
    }
    const fetchMovies = async (param)=>{
        const url = `${API}s=${param}`;
        const res = await axios.get(url);
        const data = res.data;
        // console.log("Param is ", param, data);
        if(data.Response === "False"){
            let err = res.data.Error;
            //There is some error
            if(err[0]=='I'){
                setError("Please enter some text and then try again");
            }else if(err[0]=='T'){
                setError("The entered text is too short to get results");
            }else{
                setError("Couldn't find any results");
            }
            // setError(res.data.Error);
        }else{
            setError(null);
            setSearchResults(data.Search);
            setTotalCount(data.totalResults);
        }
    }
    useEffect(() => {
        fetchMovies("avengers");
    }, [])
    return (
        <div style={{marginLeft: "2%"}}>
            <Helmet>
                <title>Search Movies</title>
                <meta name="description" content="Search for movies, series from Tmovies" />
            </Helmet>
            <div style={{marginTop: "5px", marginLeft: "4px", width: "100%"}}>
        <StyledInput 
        InputProps={{style: {color: "white"}}}
        style={{width: "80%"}}
        color="primary"
        placeholder="Search for movies, series"
        onChange={(event)=>{
            if(event.target.value.length === 0){
                fetchMovies("");
            }
            setSearch(event.target.value);
            fetchMovies(event.target.value)
        }
        }
        value={search}
        inputProps={{ 'aria-label': 'search' }}
        onKeyPress={(key)=>{
          if(key.code==='Enter'){
            fetchMovies(search);
          }
        }}>
          
        </StyledInput>
        <IconButton onClick={()=>fetchMovies(search)} type="submit" aria-label="search">
        <SearchIcon style={{color: "white"}} />
      </IconButton>
      </div>
      {
          error === null ?
          <div>
              <Grid container spacing={4} display="flex" justifyContent="space-around">
                {
                    searchResults.map((item, key)=>(
                        <Grid key={(key+currPage)*Math.random()} item xs={12} sm={6} md={4}>
                            <MovieCard movieKey={key} movie={item} />
                        </Grid>
                    ))
                }
            </Grid>
          {
              (totalResCount / 10) > 1 && 
              <div style={{ marginTop: "5%", marginBottom: "2%", display: "flex", justifyContent: "center"}}>
                  <Scroll to="navbar" smooth={true}>
              <Pagination style={{backgroundColor: "white", paddingTop: "2%", paddingBottom: "2%"}} showFirstButton showLastButton color="primary" count={Number(Math.ceil(totalResCount / 10))} page={Number(currPage)} onChange={(event: React.ChangeEvent<unknown>, value: number)=>handlePageChange(Number(value))} />
              </Scroll>
              </div>
          }
          
         </div>

         :
         <div style={{ backgroundColor: "white", width: "max-content", padding: "2%"}}>
              <p className="error">{error}</p>
         </div>
        
      }
      
        </div>
    )
}

export default DisplayMovies
