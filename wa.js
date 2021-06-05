const { Client } = require('whatsapp-web.js');
const fs = require('fs');
const qrcode = require('qrcode-terminal');
const wa = new Client();

wa.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

wa.on('ready', () => {
    console.log('Client is ready!');
    const number = "+393738669612";
    const text = "Ciao abbiamo ricevuto la tua prenotazione!\nRispondi SI a questo messaggio per confermarla!\n";
    const chatId = number.substring(1) + "@c.us";
    wa.sendMessage(chatId, text)
    .catch((err) => {
        console.log(err);
    })
})

wa.initialize();