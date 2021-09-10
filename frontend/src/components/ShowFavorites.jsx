import React, { useEffect, useState } from "react";
import API from "../apiURL";
import axios from "axios";
import AppContext from "../AppContext";
import MovieCard from "./MovieCard";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { Helmet } from "react-helmet";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const ShowFavorites = () => {
  const classes = useStyles();
  const { user } = React.useContext(AppContext);
  const [open, setOpen] = useState(true);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const moviesPerPage = 5;

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      let favs = user.favoriteMovies;
      if (favs === undefined) {
        console.log("YESSS");
        setLoading(true);
        return false;
      }
      let tempResults = [];
      await Promise.all(
        favs.map(async (imdbID) => {
          const res = await axios.get(`${API}&i=${imdbID}`);
          // console.log("DATTA is ", res.data);
          tempResults.push(res.data);
        })
      );
      setResults(tempResults);
    };

    fetchFavorites();
    setLoading(false);
  }, [user]);
  if (user === undefined) {
    console.log("user undefined");
    return (
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  if (user.favoriteMovies === undefined || user.favoriteMovies.length === 0) {
    console.log("user favorites");
    return (
      <p style={{ fontSize: "2rem", color: "red" }}>
        No Favorite movies/series available
      </p>
    );
  }
  const indexOfLastMovie = currPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  let currMovies = [];
  //Get current Jobs to be displayed on that particular page
  if (indexOfFirstMovie >= results.length) {
    currMovies = results;
  } else {
    currMovies = results.slice(indexOfFirstMovie, indexOfLastMovie);
  }

  return (
    <div style={{ width: "85vw", marginTop: "5%", marginLeft: "1.5rem" }}>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      {loading ? (
        <Backdrop
          className={classes.backdrop}
          open={loading}
          onClick={() => setOpen(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div>
          <Grid
            container
            spacing={8}
            display="flex"
            justifyContent="space-around"
          >
            {currMovies.map((item, key) => (
              <Grid key={key} item xs={12} sm={6} md={4}>
                <MovieCard favorite={true} movie={item} />
              </Grid>
            ))}
          </Grid>
          {Math.ceil(results.length / moviesPerPage) > 1 && (
            <div
              style={{
                marginTop: "6%",
                marginBottom: "2%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination
                size="large"
                style={{
                  backgroundColor: "white",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
                showFirstButton
                showLastButton
                color="secondary"
                count={Math.ceil(results.length / moviesPerPage)}
                page={currPage}
                onChange={(event: React.ChangeEvent<unknown>, value: number) =>
                  setCurrPage(value)
                }
              ></Pagination>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowFavorites;
