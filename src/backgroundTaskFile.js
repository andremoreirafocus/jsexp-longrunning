setInterval( () => {
  console.log(`Hi! My pid is ${process.pid}`);
}, 1000 );

process.on('message', (message) => {
  console.log(`${process.pid} received message ${message}`);
});
