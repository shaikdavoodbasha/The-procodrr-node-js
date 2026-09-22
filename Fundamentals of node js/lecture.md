common js module in node js

modules are reusable code file which help code resucablily and code readability.
helping the breaking code chunks


what is the difference between module.export  and export??
learen about the module object and all the properties in the module object
module wrapper ? and how all are in local scope 
it use run all the  node js code in functions and then will be able to see all the local and gloab object and their values and all


ES6 Modules 
they by default have the strict mode enabled.
asses filename and dirname in es6 modules
clg(import.meta)


difference betwee common js and ES6 Modules

common js
const timer = require('./timer.js')
synchronous file loading
file extension optional
if we give full file path then we can load any file
it is a convention to add cjs in the file extension
imports are not hoisted


ES6
asynchrounous file loading
file extensions mandatory
we can not load any file only js and mjs files are loaded
if is convention to add mjs in the file extension
we have to set type=module in package.json
imports are hoisted



what is package.json file and why does it use????
when we run  npm init
then it will ask some question like 
version
description
entry point
test command
git repo
keywords
author
license ISC


package.lock.josn what is it and why does it use to ?
packagelock.json file is used to lock the versions of the 
packages so that we install the exact same version of packages that mentioned in the package.lock.json file.

what is shebang??
npx and npm 

behind the scence uses shebang it is command line topic 
unix based os it works.
#!node - this is executable tells the use node js and run the file then it will run it as node js and it will run only in bash terminal.not in powershell.


cli-vs-library packages ??
difference
when we install normal library packages then in the nodemodule that library folder name only presented and 
when we install any cli package like vite then in the node module .bin folder will be creates.


local and gloabl packages 
inside out project folder save packages are called as locak packages.global packages are called as which packages saved globally.


what is npx??

npx searching step-1
1)first it searches inlocal for that packages
2)searches for name key in json file
3)searches for bin key

search step-2;
searches for nodemodules folder for bin folder

step-3
searches for hello in global npm folder and executs this file.

steps-4 
searches for hello package in npm regietery
prompts to install the package if found
downloads and installs.
npx what it does means when you run npx nafilename and it will exectues that file thats it.




what is npx ??????????????
npx is javascript file...thats it
