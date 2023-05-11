// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('delivery.json');
const middlewares = jsonServer.defaults();
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync("/etc/ssl/delivery.teststudyweb.ru_le1.crtkey"),
  ca: fs.readFileSync("/etc/ssl/delivery.teststudyweb.ru_le1.cacrt"),
  cert: fs.readFileSync("/etc/ssl/delivery.teststudyweb.ru_le1.crt"),
  };

// Добавляем дефолтных посредников (logger, static, cors и no-cache)
server.use(middlewares)


// Для обработки POST, PUT и PATCH необходимо использовать body-parser
server.use(jsonServer.bodyParser)
server.use((req, _, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Передаем управление роутеру `JSON Server`
  next()
})
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("hello world");
})
  

// Используем дефолтный роутер
server.use(router)
server.listen(3001, () => {
  console.log('Server ready')
})