const express=require('express');
const server=express();
const port=5050;

server.use(express.json());

server.use(express.urlencoded({extended:true}));


server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});
//share the css file
server.get('/style.css',(req,resp)=>{
    resp.sendFile(__dirname+'/style.css');
});
//share the js file
server.get('/app.js',(req,resp)=>{
    resp.sendFile(__dirname+'/app.js');
});

server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
