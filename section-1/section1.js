const fs = require('fs')

const text = fs.readFileSync("./hi.txt");
console.log(text.toString());
console.log('End')