const express = require('express');

let app = express();
const PORT = 8000;

app.set("view engine", "ejs")





app.get("/", (requset, response) => {
    // response.render('pages/index');
    let quote = "Mom look what I can do!";
    response.render("index", {
        quote: quote
    });
});

app.get("/about", (requset, response) => {
    // response.render('pages/about');
    let quote = "I can build a web application with Node.js and Express!";
    response.render("about", {
        quote: quote
    });
});



app.listen(PORT, function() {
    console.log("Express app has started.");
    console.log(`Server is running on port ${PORT}.`);
}) 

