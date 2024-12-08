const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Настройка маршрутов и middleware
app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});

// Путь к вашим SSL-сертификатам и ключам
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/v2680742.hosted-by-vdsina.ru/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/v2680742.hosted-by-vdsina.ru/fullchain.pem')
};

// Создание HTTPS сервера
https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
