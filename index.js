const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

const TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, { polling: true });

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

bot.on('message', async (msg) => { 
	const chatId = msg.chat.id;
	var _text = msg.text;
	
	try{
		bot.sendMessage(
			chatId, 
			_text, 
			{
				reply_markup: {
					keyboard: JSON.parse('[]'),
					resize_keyboard: true	
				},parse_mode: 'Markdown'			
				}
		);
	}catch(e){ console.log(e) }
}
