const express=require('express');
const server=express();
const port=3000;
// To access request data in json format we are using below middleware
server.use(express.json());
// To access request data from urlencoding we are using below middlware
server.use(express.urlencoded({extended:true}));

// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/form2.html');
});

//share the css file
server.get('/stylesheet.css',(req,resp)=>{
    resp.sendFile(__dirname+'/stylesheet.css');
});
server.post('/welcome',(req,resp)=>{
    const name=req.body.name;
    const number=req.body.number;
    const email=req.body.email;
    const password=req.body.password;
    const gender=req.body.gender;
    console.log("Post First Name: "+name);
    console.log("Post First Name: "+number);
    console.log("Post First Name: "+email);
    console.log("Post First Name: "+password);
    console.log("Post First Name: "+gender);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});