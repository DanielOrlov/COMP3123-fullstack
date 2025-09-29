const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;
// Create instance of express application
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files in /public (instruction.html will be at /instruction.html)
app.use(express.static("public"));

//http://localhost:3000/
app.get("/hello", (req, res)=>{
    res.type("text/plain").send('Hello Express JS');
});

//http://localhost:3000/about
app.get("about", (req, res)=>{
    res.send("<h1>About Page</h1>");
});

//http://localhost:3000/user?firstname=Daniel&lastname=Orlov
app.get("/user", (req, res)=>{
    console.log(req.query);

    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";

    res.json({
        firstname,
        lastname
    });

});

app.post("/user/:firstname/:lastname", (req, res)=>{
     console.log(req.params);

    const {firstname, lastname} = req.params;

    res.json({
        firstname,
        lastname
    });
});

app.post('/users', (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];

    res.json(users);
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});