const express = require('express');
const router = express.Router();
const Article = require("../models/article");

router.get('/new' , (req,res) => {
    // on new route , it will render a new article
    res.render('articles/new' , {article: new Article() });
});

router.get('/:id' , async (req,res) => {
    const article = await Article.findById(req.params.id);
    if(article == null) res.redirect('/');
    res.send('articles/show');
});

router.post('/' , async (req,res) => {
    let article = new Article({
        title: req.body.title,
        desc: req.body.desc,
        markdown: req.body.markdown
    })

    try{
        // this is an async function  
        article = await article.save();
        res.redirect(`/articles/${article.id}`);
    }catch(e){
        res.render('articles/new' ,{ article: article});
    }

});

module.exports = router;