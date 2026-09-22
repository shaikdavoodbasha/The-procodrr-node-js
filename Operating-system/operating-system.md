section-3

The Operating Sytem

why do we need to learn fundamentals of operating system??

beacuse while learning node js we have access to operating functionalities like process and environment variables and all we need to learn how does it work so thats why we need to learn the operating system.



* operating system is running on cpu
* core is a processing unit it independently run the process

physical cores are 4 logical 8 means 4 double 8

in the windows go to task manager-> performance.

------------------------
when we type command node in terminalthen node functionalities will be open
we can write the node functions 
> os.availableParallelism() like these


WHAT IS OS AND WHAT IS KERNAL??
what is operating system??
os is a software which uses to run the application using hardware mainly it focus on the hardware parts.


kernal is used to manage the hardware part maily for.
kernal is a part of os.
what is single core??
mean it run only one application at a time.

┌──────────────────────────┐
│  🖥️  APPLICATION        │
│                          │
│  🌐 Chrome               │
│  💻 VS Code              │
│  🎵 Spotify              │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│  ⚙️  OPERATING SYSTEM   │
│                          │
│  📋 Process Management   │
│  🧠 Memory Management   │
│  📁 File Management      │
│  🔌 Device Management   │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│  🧠  PROCESSOR           │
│                          │
│     ┌──────────────┐     │
│     │  ⚡ CORE 1   │     │
│     │              │     │
│     │  🔢 ALU      │     │
│     │  🎛️ Control │     │
│     │  📦 Registers│     │
│     └──────────────┘     │
└──────────────────────────┘


operating system help to run mutiple application at a time with the help of  Context switching..

the process of continusly switching the applications in the cores beacuse every application can get cup time.

What is process ? process is also called as applications or a unit of execution.
process have different states like ready ,wait, running and terminates and sleep state.

system informer for checking the context switing.


What is Threads????? (very very Important)
is node js is single thread or multi threaded??



Process is like ->chrome 
Thread is like -> different tabs and different different threads runs i the different cores.

Process spawn is parent  starting the child process.

thread starting is very fast compare to the process.


concerenccy and parallelism.

node js is multithreaded --------------


absolute Path and relative path 
absolute path : 


~/ - it will represents the home folder


what are the executable files and how to create executable

there are two types
script executable files and binary executable files
script file

what are bash files and bat files are same bat for windows and bash forl unix.

what are binary executable files 
no plain text will be there inside the file it only have binary data 


file permissions in windows
property ->security->group of user names ->edit


how commands execute in cmd ?

Alias:Bash first checks if the command matches any defined aliases

functions:Next it checks if the command matches any defined shell functions

build in commands:then,bash checks if the commands is build in shell commands(like cd,echo,pwd,etc..)

hashtable:bash checks its has table of previously looked up executable to quickly locate executables.

executable files : finally its seachers through the directories listed in the path environment variable ,in the order they appear to find an executable file matching the command name.




