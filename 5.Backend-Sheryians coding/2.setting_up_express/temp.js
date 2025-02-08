// // const catMe = require('cat-me')
// // //require('cat-me') allows us to use the cat-me package (located in the node_modules->cat-me folder)in our file. ppora cat-me ka code it brings to our js file
// // console.log(catMe()) // this will print a random cat face in the console;
// //  catMe() // this will print a random cat face in the console

// const http=require('http');

// // const server=http.createServer((req,res)=>{
// //     console.log(req.url)
// //     res.end('Hello World')
// // }) // this creates a server and response.end('Hello World') says koi bhi agar humare server ko request bhejtay, toh uske response me app says "Hello World"

// // server.listen(3000); // this listens to the server on port 3000. So, if we go to localhost:3000, we will see "Hello World" on the screen.

// //isko node index.js likhke if we run, and then localhost/3000/about hum type karte hai on chrome, we get /about written in our terminal also... this "about" is our route 


// const server=http.createServer((req,res)=>{
//     if(req.url=="/about"){
//         res.end("this is The about pagee")
//     }
//     if(req.url=="/contacts"){
//         res.end("heyyyy you can contact me by refering the contact page")
//     }
//     if(req.url=="/"){
//         res.end("welcome to the home page")
//     }
//     if(req.url=="/new"){
//         res.end("this is a NEW PAGE")
//     }
// })

// server.listen(3100);
