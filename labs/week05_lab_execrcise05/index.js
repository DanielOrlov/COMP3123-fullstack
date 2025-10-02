const express = require('express');
const userRouter = require('./routes/users');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Add User Router
app.use('/api/v1/user', userRouter);


app.get('/', (req, res)=>{
  res.send('<h1>Front page</h1>');
});



/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  //console.error('ERROR:', err.stack || err);
  res.status(500).send('Server Error');
  //res.send('This is error router');
});


app.listen(SERVER_PORT, ()=>{
  console.log(`Server is running on port $(SERVER_PORT)`);
})