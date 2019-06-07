const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    consle.log('Ja sam spreman!');
});

client.on('message', message => {
   if (message.conect == 'ping') {
      message.reply('pong');
      }
      });
      
      // THIS MUST BE THIS WAY
      clien.login(process.env.BOT_TOKEN);
