// console.log('Hii this is node js bro')
console.log('Fs module');
//fs module can read any kind of files ,it mainly deals with the o's and 1's only binary that is the power of Node js

// import fs from 'node:fs'
import fs from 'node:fs/promises'


// const a = fs.readFileSync('./hii.html')
//this is exectues synchrounously it will stop the main thread untill its completely executes it so that why it is not usefull and we also not gonna use it 

// console.log(a.toString())


// const content = fs.readFile("./hii.html", (err,data)=>{
//     const content = data.toString()
//     console.log(content);
// })

const a = await fs.readFile('./hii.html');// this is better one
console.log(a.toString());

console.log('End')
// fs.readFile('./hii.html') here main thread is not blocking 
// here it will return an promise bro 