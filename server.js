const express=require('express');
const server=express();
const port=3030;

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

server.get('/style.css',(req,resp)=>{
    resp.sendFile(__dirname+'/style.css');
});

server.get('/app.js',(req,resp)=>{
    resp.sendFile(__dirname+'/app.js');
});

server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});