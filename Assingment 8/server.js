const express=require('express');
const server=express();
const port=8080;
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});
server.get('/welcome',(req,resp)=>{
    const name=req.query.name;
    const number=req.query.number;
    const email=req.query.email;
    const password=req.query.password;
    const gender=req.query.gender;
    console.log("GET First Name :"+name);
    console.log("GET Number: "+number); 
    console.log("GET e-Mail: "+email);
    console.log("GET Password: "+password); 
    console.log("GET Gender: "+gender);  
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html'); 
});
server.get('/stylesheet.css',(req,resp)=>{
    resp.sendFile(__dirname+'/stylesheet.css');
});
server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
