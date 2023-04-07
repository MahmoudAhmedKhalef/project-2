const http = require('http');

const users = [];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to home page');
    res.end();
  } else if (req.url === '/users/add' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const user = JSON.parse(body);
      users.push(user);
      console.log(user);
      res.end('User added successfully');
    });
  } else if (req.url === '/users') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  }
});

server.listen(3000);
