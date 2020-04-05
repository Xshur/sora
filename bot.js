const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk2MjM5MjAwMzE1Mzc1NjU2.Xol9Tg.Mf7c8FQutdQKpys8L3ihiHkRSfM';

const PREFIX = '>';

bot.on('ready', () =>{
    console.log('online');
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
