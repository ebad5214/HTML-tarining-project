const express=require('express');
const server=express();
const port=8080;

server.use(express.json());

server.use(express.urlencoded({extended:true}));

server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

server.get('/stylesheet.css',(req,resp)=>{
    resp.sendFile(__dirname+'/stylesheet.css');
});

server.get('/welcome',(req,resp)=>{
    const first_name=req.query.first_name;
    const last_name=req.query.last_name;
    const dob=req.query.dob;
    const email=req.query.email;
    const gender=req.query.gender;
    const number=req.query.number;
    const user_name=req.query.user_name;
    const password=req.query.password;
    
    console.log("GET First Name :"+first_name);
    console.log("GET Last Name :"+last_name);
    console.log("GET Date of Birth :"+dob);
    console.log("GET e-Mail :"+email);
    console.log("GET Gender :"+gender);
    console.log("GET Mobile Number :"+number);
    console.log("GET User Name :"+user_name);
    console.log("GET Password :"+password);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});

server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});