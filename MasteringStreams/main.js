// import fs from 'fs'

// const readstream = fs.createReadStream('chars.txt',{
//     highWaterMark : 1*1024 *1024
// });

// const writestream = fs.createWriteStream('streams.md',{
//     highWaterMark:1*1024 *1024
// })

// readstream.pipe(writestream)

// //we cannot create duplex streams using fs module

//duplex streams are read and write both are doing

console.log(process.stdin)
console.log(process.stdout)
console.log(process.stderr)
