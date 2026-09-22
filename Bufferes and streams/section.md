buffers and steams very important in node js it tells how the data is transferring.

Array buffers:
array of bytes
when ever we create arraybuffer then we have 4 bytes
In browser ArrayBuffer() is constructor function


Signed and unsigned values

understanding the negative values representation.
UTF least number is 0
So far we have learned number all are unsigned numbers.

1 - negative before the number represents negative number in binary
0 - positive before the number represents positive number in binary

how convert the unsigned into signed values
by using 2's compliment
the values 128 has exception.


reading and writing using array buffers
setInt8()
getInt8() 


Wrting Multi byte data

Typed arrays in javascript
node js used types arrays
what are typed arrays
Data view provides very good control on byte level of representation to understand how things work under.
If we want some less control 
Typed array is different types of array category.

*Int8Array
*Int16Array
*Int32Array
*BigInt64Array

*Unit8Array
*Unit8ClampedArray
*Unit16Array
*Unit32Array
*BigUnit64Array

These all are store only integers


Float32Array
Float64Array



--Transferring array buffer Data


Buffers in  node js

Alloc vs AllocUnsafe  
Alloc will allocate ram memory and places 0 
AllocUnsafe will allocate ram memory without placing 0 ,with any randome values
AllocUnsafe is fast compare to Alloc


Buffer Pool In node js
what is buffer pool

Buffer Methods and Properties
Buffer.from('','')
nodeBuffer.toString();
nodeBuffer.toJson();
nodeBuffer.slice(5,8).toString();//depricated
nodeBuffer.subarray();
Butter.readInt8();
Butter.writeInt8();
Butter.includes();
Butter.fill();



Buffers has somes  drawbacks
ram will fill very quickly when we are using buffers with big files.

Buffers are Array buffer ,it some memory in RAM ,it uses RAM memory only for fast progress



Base-64
base-64 is character encode which will binary data and converts into string and kind of binary data it will convert into string
Base-64 Binary - Text encoding method
IN - chrome btoa() binary to ascii
atob()ascii to binary

xxd -b file.txt this is command to see any files binary data

