var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var cors=require('cors')
var url=require('url')
mongoose.Promise=Promise
var app=express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/tourism',err=>{
    if(err)
        console.error("Error"+err)
    else
        console.log("MongoDB Connected")
})
url1 = "mongodb://127.0.0.1:27017/";
MongoClient = require('mongodb').MongoClient;
app.get('/hill',function(req,res){
    var x;
    MongoClient.connect(url1,function(err,db){
        if(err) throw err;
        var dbo=db.db("tourism");
        dbo.collection("hill").find({}).toArray(function(err,result){
            if (err) throw err;
            x=result;
            res.status(200).send(x);
            db.close();
        });
    });
})
var User=require('./schema/user_schema')
app.post('/register',function(req,res){
    console.log("POST Request")
    var userData=req.body
    var user=new User(userData)
    user.save((err,registeredUser)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(registeredUser)
    })
})
app.post('/login',function(req,res){
    //console.log("POST Request For Login")
    var userData=req.body
    //console.log(userData)
    User.findOne({emailId:userData.email},(erro,user)=>{
        if(erro)
            console.log(erro)
        else
        {
            if(!user)
            {
                res.status(401).send('Invalid Username')
            }
            else if(user.password!=userData.password)
            {
                res.status(401).send('Invalid Password')
            }
            else
            {
                res.status(200).send(user)
            }
        }
    })
})

app.listen(8081,()=>console.log("Server listening at 8081"))