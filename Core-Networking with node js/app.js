// import dgram from "node:dgram";

// const socket = dgram.createSocket("udp4")
// // console.log(socket)

// // socket.on("message",(a,b)=>{
// //     console.log(a,b);
// // });

// socket.on("listening",()=>{
//     console.log(socket.address())
//     console.log('listening')
// });

// socket.bind({port:4000},()=>{
//     console.log(socket.address())
//     console.log('listening on port 4000')
// });

// // socket.send("Hii",3000,"198.168.87.144")

// creating TCP server
// import net from 'node:net'
// const server = net.createServer();
// server.listen(4000);
// server.on('listening',()=>{
//     console.log('Server started on port 4000')
// })


import http from 'node:http';

const server = http.createServer((request,response)=>{
    console.log('got the request');
    request.on("data",(chunk)=>{
        console.log(chunk.toString());
    });
    response.end('Hello from http server');
})

server.listen(8000,"0.0.0.0",()=>{
    console.log('Server Started')
});