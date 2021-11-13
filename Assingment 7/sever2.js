const express=require('express');
const server=express();
const port=8181;
// To access request data in json format we are using below middleware
server.use(express.json());
// To access request data from urlencoding we are using below middlware
server.use(express.urlencoded({extended:true}));

// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/form2.html');
});

// '/welcome'->url path using POST
server.post('/welcome',(req,resp)=>{
    const firstName=req.body.firstName;
    const lasttName=req.body.lasttName;
    const address=req.body.address;
    const city=req.body.city;
    const male=req.body.male;
    const female=req.body.female;
    const other=req.body.other;
    console.log("Post First Name: "+firstName);
    console.log("Post Last Name: "+lasttName);
    console.log("Post Address: "+address);
    console.log("Post City: "+city);
    console.log("Post Gender: "+male); 
    console.log("Post Gender: "+female); 
    console.log("Post Gender: "+other);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});
//share the css file
server.get('/stylesheet.css',(req,resp)=>{
    resp.sendFile(__dirname+'/stylesheet.css');
});
server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
}); 

 


