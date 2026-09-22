// // 192.168.1.194

// import http from 'http';

// const clientRequest = http.request({method:"POST"});
// clientRequest.end("Hii I am Client")
// // console.log(clientRequest)
// clientRequest.on('response',(response)=>{
//     response.on("data",(chunk)=>{
//         console.log(chunk.toString());
//     });
// });

import http from "http";

const clientRequest = http.request({
    hostname: "192.168.1.194",
    port: 8000,
    path: "/",
    method: "POST"
});

clientRequest.on("response", (response) => {
    response.on("data", (chunk) => {
        console.log(chunk.toString());
    });
});

clientRequest.on("error", (error) => {
    console.log("Client Error:", error.message);
});

clientRequest.end("Hii I am Client");