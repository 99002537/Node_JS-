var express=require('express');
var app=express();
var bookList=require('./books.json');
app.get('/',function(req,res){
    res.send('welcome to express')
});
app.listen('3000',function(){
    console.log('server running in port 3000 ');
});
app.get("/loginUser",function(req,res){
    var uname=req.query.username;
    var ucity=req.query.city;
    var newuser={username:uname,city:ucity};
    res.send(newuser);
});
app.get("/search/:choice",function(req,res){
    var cab=req.params.choice;
    res.send("Your car choice is " +cab)
})
app.get("/searchCab/:choice/:type",function(req,res){
    var cab=req.params.choice;
    var cabType=req.params.type;
    res.send("Your car choice is "+cab+ 'with' +cabType);
})
app.get("/searchCabs/:choice/:type",function(req,res){
    var cab=req.params;
    res.send(cab);
})

app.get("/showBooks",function(req,res){
    res.send(bookList);
})
//App.get('/login/:username',function(req,res){
//     var username=req.params.username;
//     res.send('welcome, ${username}');
// });
// app.get('/login/:username/:city',function(req,res){
//     var params=req.params;
//     res.send(params);
// });
// app.get('/login/:username/:city',function(req,res){
//     var params=req.params;
//     res.send(params);
// });