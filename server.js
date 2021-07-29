const express = require('express');
const app = express();
const mongoose = require('mongoose');
const articleRouter = require("./routes/articles");

// connecting to database to save the articles
mongoose.connect("mongodb://localhost/blog" , {
    useNewUrlParser: true  ,  useUnifiedTopology: true 
});

app.set("view engine" , 'ejs');

app.use(express.urlencoded({urlencoded: false}));

app.get("/" , (req,res) => {
    const articles = [
        {
            title: "First article",
            date: new Date(),
            desc: " Desc 1 "
        },
        {
            title: "Second article",
            date: new Date(),
            desc: " Desc 2 "
        },
        ]
    res.render("articles/index" , {articles: articles});
});

app.use("/articles" , articleRouter);

app.listen(8000 , () => {
    console.log("server running at port 8000");
});