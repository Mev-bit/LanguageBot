const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
var franc = require('franc');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    var result = franc(msg.content)
    if(result === 'und'){
        msg.reply('Your message is too small');
    }else{
        switch (result){
            case 'fra':
                msg.reply('Votre message est en français');
                break;
            case 'eng':
                msg.reply('Your message is in english');
                break;
        }
    }

});


client.login(process.env.TOKEN);