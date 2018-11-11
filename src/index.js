require('@babel/register');

const express = require('express');
const render = require('./render').default;
const server = express();

server.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root">${render()}</div>
      </body>
    </html> 
  `);
});

server.listen(3001);
