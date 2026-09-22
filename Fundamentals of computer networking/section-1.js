// import os from 'node:os'

// const networkInterface = os.networkInterfaces()

// console.log(networkInterface)
import dgram from 'node:dgram' //upd server
const socket =  dgram.createSocket('udp4')
// console.log(socket);

socket.on('message',(a,b)=>{
    console.log(a,b)
});

// socket.on('listening',()=>{
//     console.log(socket.address());
//     console.log('listening');
// });

socket.bind(5000,()=>{
    console.log(socket.address())
    console.log('listening......')
})