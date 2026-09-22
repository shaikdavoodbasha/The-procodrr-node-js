// const a = new  ArrayBuffer(4)
// const view = new DataView(a)


// Buffers in node js
// console.log(Buffer);
// Buffer is only for node js not in chrome
//Buffere is same like array buffer. like UIntArray



// Practical use of buffers
//case-1
import fs from 'fs/promises'

const a = await fs.readFile("C:\\Users\\shaik\\Downloads\\ChatGPT Image Aug 15, 2026, 10_53_07 AM.png");
console.log(a)

//case-2 networking datas

//case -3 on working with servers - frontend and backend
//buffers have some drawbacks


