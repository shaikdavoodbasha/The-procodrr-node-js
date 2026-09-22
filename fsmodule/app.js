// import fs from 'node:fs'
import fs from 'node:fs/promises'

//fs module not only reads the files it directly works on the binary it can read and write anything.


// console.log(fs)
// const contentbuffer = fs.readFileSync('./index.html','utf-8') this one is not used it is prohibited.
// this works sychronously which blocks the main thread
// console.log(contentbuffer.toString())

// const content = fs.readFile("./index.html",(err,data)=>{console.log(data);const content = data.toString()})
// this will work like setTimeout() it is very usefull
// console.log('End')

// const a = await fs.readFile('./index.html');
// console.log(a.toString())
//this is best way- here there is not break of the main thread. this will work same as async and await.

// console.log('End');

// fs.writeFile('./file-1.txt','Hello world')
//It overwrite all the text existing 
// fs.appendFile('./file-1.txt','Hello davoodbhai');
// it will usefull and adds the data or context it extends it not completely overwrite

