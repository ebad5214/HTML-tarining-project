// const express=require('express');
// const server=express();
// const port=5000;
// // To access request data in json format we are using below middleware
// server.use(express.json());
// // To access request data from urlencoding we are using below middlware
// server.use(express.urlencoded({extended:true}));

// // '/'->default page/ home page
// server.get('/',(req,resp)=>{
//     resp.setHeader("Content-Type","text/html")
//     resp.sendFile(__dirname+'/index.html');
// });
// // '/welcome'->url path using GET
// //share the css file
// server.get('/stylesheet.css',(req,resp)=>{
//         resp.sendFile(__dirname+'/stylesheet.css');
// });

// // '/welcome'->url path using POST
// server.post('/welcome1',(req,resp)=>{
//     const name=req.body.name;
//     const number=req.body.number;
//     const email=req.body.email;
//     const password=req.body.password;
//     const female=req.body.male;
//     const male=req.body.female;
//     const other=req.body.other;
//     console.log("Post First Name :"+name);
//     console.log("Post Number: "+number); 
//     console.log("Post e-Mail: "+email);
//     console.log("Post Password: "+password); 
//     console.log("Post Gender: "+female); 
//     console.log("Post Gender: "+male); 
//     console.log("Post Gender: "+other);
//     resp.setHeader("Content-Type","text/html")
//     resp.sendFile(__dirname+'/welcome1.html');
// });


// server.listen(port,()=>{
//     console.log(`http://localhost:${port} started `);
// });


const express=require('express');
const server=express();
const port=5000;
// To access request data in json format we are using below middleware
server.use(express.json());
// To access request data from urlencoding we are using below middlware
server.use(express.urlencoded({extended:true}));

// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

//share the css file
server.get('/stylesheet.css',(req,resp)=>{
        resp.sendFile(__dirname+'/stylesheet.css');
});

// '/welcome'->url path using POST
server.post('/welcome',(req,resp)=>{
    const name=req.body.name;
    const number=req.body.number;
    const email=req.body.email;
    const password=req.body.password;
    const passwordagain=req.body.passwordagain;
    const female=req.body.female;
    const male=req.body.male;
    const other=req.body.other;
    console.log("Post  Name : "+name);
    console.log("Post  Number: "+number);
    console.log("Post  e-Mail: "+email);
    console.log("Post  Password: "+password);
    console.log("Post  Password Again: "+passwordagain);
    console.log("Post  Gender: "+male);
    console.log("Post  Gender: "+female);
    console.log("Post  Gender: "+other);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
