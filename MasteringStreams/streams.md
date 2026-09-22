Introduction to streams 
streams are one of the efficent way to transfer the data from one location to another location in chuncks so that fast loading and fast transfering.

Types of streams in node js

Node js streams allow you to work with data efficiently by processing it incrementally without loading the entire data into memory.streams are particularly useful for handling large data sets or continuos data flows.There are four types of streams in node js

1.Readable streams

readable streams are used to read data from a source,such as reading files or reading HTTP requests.

2.Writable Streams
Writable streams are used to write data to a destination,such as writing to a file or sending HTTP responses

3.Duplex Streams

Duplex streams are streams that can both read and write data.These are useful for situations like network communication,where you both send and recive data.

4.Transform streams

Transform streams are a special type of duplex stream where the output is a transformation of the input.They modify or process the data as it passes through the streams,streams compressin or encrypting data.



Internal buffer of readable stream


Backpressure and internal buffer in writeable streams
states of writable streams
closing writables streams


# Writable Stream States in Node.js

This document outlines the different states of writable streams in Node.js and how to check each state.

## 1. Writable (Initial) State

The default state where the stream is ready to accept data.

- **Check**: Use the `writable.writable` property.
  ```js
  console.log(stream.writable); // true if writable, false if not
  ```

## 2. Corked State

In this state, the stream buffers all written data until it is explicitly uncorked.

- **Check**: Use the `writableCorked` property.
  ```js
  console.log(stream.writableCorked); // 0 means not corked, > 0 means corked
  ```

## 3. Ended State

This state occurs when the `end()` method is called and the stream has been signaled to end, meaning no further writes can be made, but it doesn't guarantee that all data has been flushed yet.

- **Check**: `writable.writableEnded`

## 4. Finished State

This state occurs when the `end()` method is called and all data has been flushed to the destination.

- **Check**: `writable.writableFinished`



what is piping and pipe method

pipe menthod is mainly used on readstream.
pipe and unpipe methods


piping using pipeline()


Data streams ??
what are data streams it a concept of OS and used in linux and windows as well

1)standard input -data stream - from key board- it is duplex stream
2)standard output- data stream - from monitor
3)standar error - data stream - for showing errors

piping and redirection of datastreams
this is piping
process -1  standard input
process-2 connect with standard out -must use the bach terminal ,wsl 

node script.js | node app.js 
process.stdin.ond((chunck)=>{
  clg(chunk)
})


redirection

working on one lakh numbers

fs module is very slow and incorrect nubers
but streams are very fast


why streams are very fast??
when we are using the fs modules system files,then it keeps opening file and appending data and closing the file again ,it keeps doing it until the process will completed 

but in stream it will open once and it will done process after the it will closed

second -reason
the write stream transfers some good amount data

File discriptor?
it a non negative integer

reading files with file descriptor
writing files with file descriptor
custom internal buffer
handling files using promises
creating readable and writable streams using promises version
how to browsers use streams??
