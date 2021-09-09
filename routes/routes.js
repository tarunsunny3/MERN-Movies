const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const  bcrypt = require('bcrypt');
const User = require('../db/userSchema');
const { requireAuth } = require('../middleware/authToken.js');

router.get('/decodedUser', requireAuth, async (req, res)=>{
  const user = req.decoded;
  if(user.id === null){
    res.json({user: req.decoded});
  }else{
    try {
      const userDetails = await User.findOne({_id: user.id});
      res.json({user: userDetails, success:  true});
    } catch (error) {
      res.json({success: false});
    }
  }

})
//Logout
router.get('/logout', requireAuth, (req, res)=>{
    try{
    res.cookie("token", "", { maxAge: -1})
      res.sendStatus(200);
    }catch(e){
      res.sendStatus(400).json({success: false});
    }
  });
  
  router.post('/sign_up', async (req, res)=>{
    const {username, password} = req.body;
    let userDetails = await User.findOne({username}).exec();
    if(!userDetails){
      const newUser = new User({
        username,  password
      });
      try{
        const doc = await newUser.save();
        console.log(doc);
        res.json({
          success: true
        })
      }catch(e){
        console.log("Error is ",e);
        res.json({
          success: false,
          error: "Couldn't save the doc"
        })
      }
    }else{
      res.json({
        success: false,
        message: "User already exists!"
      })
    }
  })
  router.post('/sign_in', async (req, res)=>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
      //User is not registered
      res.json({
        success: false,
        message: "Username is not registered"
      })
      return;
    }
    const match = bcrypt.compareSync(password, user.password);
    if(!match) {
      res.json({success: false, message: "Incorrect password"});
    }else{
  
        let reg=false;
        const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        if(user.details === undefined){
          reg = true;
        }
        res.cookie('token',token, {maxAge: 10 * 24 * 60 * 60 * 60 , httpOnly: false, sameSite: "none", secure: true});
        res.status(200).json({
            success: true,
            reg,
            result: {
                username: user.username,
                role: user.role,
            }
        })
      }
  })

  //Add Favorite to the User favorite list
router.post('/addFav', requireAuth, async (req, res)=>{
  const {imdbID} = req.body;
  const userId = await req.decoded.id;
  const user = await User.findOne({_id: userId});
  if(!user.favoriteMovies.includes(imdbID)){
    user.favoriteMovies.push(imdbID);
    try {
      await user.save();
      res.json({success: true});
    } catch (error) {
      res.json({success: false});
    }
  }
})


  //Remove Favorite from the User favorite list
  router.post('/removeFav', requireAuth, async (req, res)=>{
    const {imdbID} = req.body;
    const userId = await req.decoded.id;
    const user = await User.findOne({_id: userId});
    if(user.favoriteMovies.includes(imdbID)){
      user.favoriteMovies.splice(user.favoriteMovies.indexOf(imdbID), 1);
      try {
        await user.save();
        res.json({success: true});
      } catch (error) {
        res.json({success: false});
      }
    }
  })
  module.exports=  router;