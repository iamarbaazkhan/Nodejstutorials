var express= require('express');

//creating instance 

var app=express();
app.set('view engine','ejs');
app.get('/home',function(request,response){
      response.send('This is home page bro');
});

//generating multiple pages

app.get('/posts/:id',function(request,response){
    //To get multiple data
    // response.send('This post is :' + request.params.id);
    //ejs funcitoning
    response.render('blog',{'blog_post' : request.params.id});
});

app.listen(5000);