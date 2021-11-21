const express=require('express');
const server=express();
const port=4040;

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

server.post('/welcome',(req,resp)=>{
    const name=req.query.name;
    const number=req.query.number;
    const email=req.query.email;
    const password=req.query.password;
    const gender=req.query.gender;

    console.log("POST Name :"+name); 
    console.log("POST Number :"+number);
    console.log("POST e-Mail :"+email);
    console.log("POST Password :"+password);
    console.log("POST Gender :"+gender);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});

server.get('/style.css',(req,resp)=>{
    resp.sendFile(__dirname+'/style.css');
});

server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});

