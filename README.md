This project illustrates how to fork processes using Node.js

In this example a specific numbre of processes is initiated by calling fork to instantiate Node to run a file called backgroundTaskFile.js

In this first version the backgound task just prints to the console a message every second.

Using the ps command you can see the node instances running.

Linux/Mac: ps -ef | grep node
Windows: ps | findstr node 

This simple example also demonstrates the use of:
- Map;
- closures;
- iterators;
- rest operator;

This is based on Erick Wendel´s Javascript Expert course.


