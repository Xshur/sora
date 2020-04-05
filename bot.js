const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '';

const PREFIX = '>';

bot.on('ready', () =>{
    console.log('online');
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
