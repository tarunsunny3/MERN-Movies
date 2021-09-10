import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import AppContext from '../../src/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SortIcon from '@material-ui/icons/Sort';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  appbar:{
    background: 'white',
  },
  title: {
    marginTop: "1%",
    marginLeft: "-1%",
    // flexGrow: 1,
  },
  title1: {
    flexGrow: 1,
    marginLeft: '1%',
    cursor: "pointer",
    fontFamily: "Pacifico, cursive, serif",
    color: "#C490E4"
  },
  headerItems:{
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
  headerButton:{
    '&:hover':{
      backgroundColor: "#FFDAB9"
    },
    color: "black",
    cursor: "pointer",
  },
  currentHeaderItem: {
    cursor: "pointer",
    backgroundColor: "#BCFFB9",
    color: "black",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize:  "initial"
  },
  headerItem: {
    '&:hover':{
      backgroundColor: "pink",
      padding: "10px 10px  5px 10px",
      color: "black",
    },
    cursor: "pointer",
    color: "black",
    fontSize:  "1rem"
  },
  iconText: {
    marginLeft: "10px"
  },
  sectionDesktop: {
     display: 'none',
     [theme.breakpoints.up('md')]: {
       width: "35vw",
       display: 'flex',
       alignItems: "center",
       justifyContent: "space-around"
     },
   },
   sectionMobile: {
     display: 'flex',
     [theme.breakpoints.up('md')]: {
       display: 'none',
     },
   },
   currMenuItem:{
     color: 'green'
   }
}));


const  NavBar = (props)=> {
  const {history} = props;
  const {user, setUser, setLoggedIn} = React.useContext(AppContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  // const user = userDetails.user;
  // const isMenuOpen = Boolean(anchorEl);
  // console.log("User is ", user);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (e, pageURL) => {
    e.preventDefault();
    setAnchorEl(null);
    history.push(pageURL);
  };

  const onButtonClick = (event, pageURL) => {
    event.preventDefault();
    history.push(pageURL);
  }
  const Logout = async  ()=>{
    const d = await axios.get('/api/logout');
    setUser({id: null, role: null, username: null});
    console.log(d);
    setLoggedIn(false);
    history.push('/login');

  }
  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {
      (user===undefined || user===null || user.id === null) &&
      <div>
        <MenuItem onClick={(e)=>{handleMenuClick(e, "/register"); handleMobileMenuClose();}}><span><i style={{color: 'blue'}} className="fas fa-user-plus"></i></span><span className={classes.iconText}>Register</span></MenuItem>
        <MenuItem onClick={(e)=>{handleMenuClick(e, "/login"); handleMobileMenuClose();}}><span><i style={{color: 'blue', fontSize: "1.1rem"}} className="fas fa-sign-in-alt"></i></span><span className={classes.iconText}>Login</span></MenuItem>
      </div>
      }
    
      {
        user !== undefined && user.id !== null &&
        <div>
          <MenuItem onClick={(e) => { handleMenuClick(e, "/search"); handleMobileMenuClose(); } }><VisibilityIcon /><span className={classes.iconText}>Search Movies</span></MenuItem>
          <MenuItem onClick={(e) => { handleMenuClick(e, "/showFavorites"); handleMobileMenuClose(); } }><VisibilityIcon /><span className={classes.iconText}>Show favorites</span></MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
              <AccountCircle />
              <span className={classes.iconText}>Profile</span>
          </MenuItem>
        </div>
    }
    </Menu>
  );
  
  return (
    <div id="navbar" className={classes.root}>
      <AppBar className={classes.appbar} position="static" elevation={0}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
        <img onClick={()=>window.location.href = "/"}  style={{ cursor: "pointer", height: window.innerHeight/11}} alt={"app logo"} src={process.env.PUBLIC_URL +"/logo192.png"}/>
        
          </Typography>
          <Typography onClick={()=>window.location.href = "/"}  className={classes.title1} variant="h6" >
            Tmovies
          </Typography>
           
            
            <div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <SortIcon />
              </IconButton>
          </div>

         
                <div className={classes.sectionDesktop}>
                  { (user === undefined || user === null || user.id == null) &&
                    <div className={classes.headerItems}>
                      <p className={history.location.pathname !== '/login' ? classes.headerItem : classes.currentHeaderItem} style={{marginRight: "10%"}} variant="contained" onClick = {(event)=>onButtonClick(event, "/login")}>Login</p>
                      <p className={history.location.pathname !== '/register' ? classes.headerItem : classes.currentHeaderItem} variant="contained" onClick = {(e)=>onButtonClick(e, "/register")}> Register</p>
                    </div>
                  }
                  {
                    user.id !== null &&
                    <>
                    <p className={history.location.pathname !== '/search' ? classes.headerItem : classes.currentHeaderItem} onClick = {(event)=>onButtonClick(event, "/search")}>Search Movies</p>
                    <p className={history.location.pathname !== '/showFavorites' ? classes.headerItem : classes.currentHeaderItem} onClick = {(event)=>onButtonClick(event, "/showFavorites")}>Show favorites</p>
                    </>
                  }
                 
                     
                     
               
              
             
        { user.id !== null &&
        <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
              <AccountCircle/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={()=>setAnchorEl(null)}
              >


              <MenuItem onClick={()=>{setAnchorEl(null);Logout();}} color="inherit"><ExitToAppIcon className={classes.menuIcons}/><span className={classes.iconText}>Logout</span></MenuItem>
                </Menu>
                </>
}
            {renderMobileMenu}
            </div>
          </div>

      

        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(NavBar);
