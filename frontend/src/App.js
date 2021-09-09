import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AppContext from '../src/AppContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailedMovie from "./components/DisplayMovies/DetailedMovie";
import DisplayMovies from "./components/DisplayMovies/DisplayMovies";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from './components/NavBar';
import ShowFavorites from './components/ShowFavorites';
import HomePage from './components/HomePage';
function App() {
  const [user, setUser] = useState({});

   //After logout to be able to get the user again in Login we need to use
  //this variable to hit the backend again

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(()=>{
    
    async function fetchUser() {
       const res = await axios.get('/api/decodedUser');
       const data = res.data;
      //  console.log("Data is ", data);
       setUser(data.user);
     }
     fetchUser();
  }, [loggedIn]);

  //Context Usage Purpose

  const userDetails = {
    user,
    setUser,
    loggedIn,
    setLoggedIn
  }

  return (
    <Router>
      <AppContext.Provider value={userDetails}>
      <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/search" component={DisplayMovies}/>
        <Route exact path="/showFavorites" component={ShowFavorites}/>
      </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
