const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile("index.html","utf-8",(err,data)=>{
            if(err){
                console.log("Error",err);
                res.end("error reading home.html")
            }
            else{
                res.end(data)
            } 
        })
    }
    else if(req.url=="/whyus"){
        fs.readFile("whyus.html","utf-8",(err,data)=>{
            if(err){
                console.log("Error",err);
                res.end("error reading whyus.html")
            }
            else{
                res.end(data)
            } 
        })
    }
    else if(req.url=="/login"){
        fs.readFile("login.html","utf-8",(err,data)=>{
            if(err){
                console.log("Error",err);
                res.end("error reading login.html")
            }
            else{
                res.end(data)
            } 
        })
    }
    else if(req.url=="/signup"){
        fs.readFile("signup.html","utf-8",(err,data)=>{
            if(err){
                console.log("Error",err);
                res.end("error reading signup.html")
            }
            else{
                res.end(data)
            } 
        })
    }
    else if(req.url=="/contact"){
        fs.readFile("contact.html","utf-8",(err,data)=>{
            if(err){
                console.log("Error",err);
                res.end("error reading contact.html")
            }
            else{
                res.end(data)
            } 
        })
    }
})
server.listen(8090,()=>{
    console.log('listening on port 8090')
})