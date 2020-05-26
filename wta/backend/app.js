const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const Candidate = require('./models/total');

mongoose.connect("mongodb+srv://Karthik:Ganesha_7@votingapp-evyxe.mongodb.net/voting?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(() => {
        console.log("Connection to DB failed");
    });


app.use(bodyParser.json());
app.use((bodyParser.urlencoded({extended: false})));

app.use((req,res,next) => {
   res.setHeader('Access-Control-Allow-Origin',"*") ;
   res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept");
   res.setHeader('Access-Control-Allow-Methods',"GET,POST,DELETE,PATCH,OPTIONS");
    next();
});


app.patch("/api/cr-elections/:post", (req,res,next) => {
    Candidate.findOneAndUpdate({post: req.params.post, name: req.body.name}, 
                            {$inc : {vote : 1}}).then(doc => {
                                
                                console.log("Updated I suppose");
                                console.log(doc);
                            }).catch(err => {
                                console.log(err);
                            });
   
});

app.patch("/api/general-elections/:post", (req,res,next) => {
    Candidate.findOneAndUpdate({post: req.params.post, name: req.body.name}, 
                            {$inc : {vote : 1}}).then(doc => {
                                
                                console.log("Updated I suppose");
                                console.log(doc);
                            }).catch(err => {
                                console.log(err);
                            });
   
});



app.get('/api/results', (req,res,next) => {
    Candidate.find()
        .then(documents => {
            console.log(documents);
            res.status(200).json({
                message: "Success",
                results: documents
            });
        });
    
});

module.exports= app;