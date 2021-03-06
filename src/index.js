import { fork } from 'child_process';
// import { setTimeout } from 'timers/promises';
const file = './myfile.csv';
const PROCESS_COUNT = 10;

const backgorundTaskFile = './src/backgroundTaskFile.js';
const processes = new Map();
for (let index = 0; index < PROCESS_COUNT; index++ ) {
  const child = fork(backgorundTaskFile, [file]);
  processes.set(child.pid, child);
  console.log(`Forked pid ${child.pid}`);
}

function roundRobin(array, index=0) {
  return function() {
    if (index >= array.length) 
     index = 0;
    return array[index++];
  }
}

const getProcess = roundRobin([...processes.values()]);

await setTimeout(() => {}, 100);
for (let i = 0; i < 100; i++)
  console.count(getProcess().pid);
setTimeout(() => {
  for (let thisProcess of [...processes.values(), ...processes.values()]) {
    console.log('process ', getProcess().pid);
    console.count(getProcess().pid);
    thisProcess.send('Process this message');
  } 
}, 1000)



