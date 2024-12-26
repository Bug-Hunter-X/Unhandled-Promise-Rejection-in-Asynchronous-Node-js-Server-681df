const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = fetchData();

  // Attempt to access data that might not be available yet
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(data.someProperty);
});

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a scenario where data might not always be available
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve({ someProperty: 'Success!' });
      } else {
        reject(new Error('Data not available'));
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});