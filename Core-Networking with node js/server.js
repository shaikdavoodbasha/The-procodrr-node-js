import http from 'node:http'

const server = http.createServer();

//request is readable stream
//response is writable stream
server.on('request',(request,response)=>{
    console.log('Got the request');
    request.on('data',(chunk)=>{(
        console.log(chunk.toString()));
    })
    response.setHeader('Access-Control-Allow-Origin','23');
    response.setHeader('Content-Length','23');
    response.write('Hello from http server');
    request.on('data',(chunk)=>{
        console.log('Got data on request');
        console.log(chunk.toString());
        })

    response.statusCode=400;
    // response.end()
})
server.on("connection",(socket)=>{
    socket.end("HTTP/1.1 \n\n Hii From http server");
});


server.listen(4000,"0.0.0.0",()=>{
    console.log("server started")
})