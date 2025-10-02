const express = require('express');
const routerUser = express.Router();
const users = require('../user.json');
//console.log('Loaded users:', users);

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
routerUser.get("/home", (req, res) => {
    // res.send('This is the home router');
    res.redirect('/home.html');
});

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get("/profile", (req,res) => {
  res.json(users);
});





/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/

// http://localhost:3000/api/v1/user/login
routerUser.post('/login', (req,res) => {
  //res.send('This is login router');
  const {username, password} = req.body;
  if(username == users.username && password == users.password){
    res.json({status: true, message: "User is valid"});
  }
  else if(username != users.username){
    res.json({status: false, message: "User Name is invalid"});
  }
  else {
    res.json({status: false, message: "Password is invalid"});
  };
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req,res) => {
  //res.send('This is logout router');
  const {username} = req.params;
  res.send(`<b>${username} successfully logout.<b>`)
});

module.exports = routerUser;