const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

 const categoryId = "586462135337353217";
  
  var userName = message.author.username;
  var userDiscriminator = message.author.discriminator;
  
  var bool = false;
  
  message.guild.channels.forEach((channel) => {
    
    if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
      
      message.channel.send("Vec´ ste kreirali kartu")
      
      bool = true;
      
    }
    
  });
  
  if (bool == true) return;
  
  var embedCreateTicket = new discord.RichEmbed()
  .setTitle("Hoi, " + message.author.username)
  .setFoother("Kreiran je kanal ticket");
  
  message.channel.send(embedCreateTicket);
  
  message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
    
  createdChan.setParent(categoryId).then((settedParent) => {
    
    settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGE": false });
    
    settedParent.overwritePermissions(message.author, {
      
      "READ_MESSAGE": true, "SEND-MESSAGE" : true,
      "ATTACH_FILES": true, "CONNECT":true,
      "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS":true
      
       });
    
     var embedParent = new discord.RichEmbed()
  .setTitle("Hoi, " + message.author.username.toSting())
  .setDescription("Postavite svoje pitanje/poruku ovdje");
  
  settedParent.send(embedParent);
    
    
     }).cacth(err => {
       message.channel.send("Nešto je pošlo po zlu");
  });
    
  }).cacth(err => {
    message.channel.send("Nešto je pošlo po zlu");
  });
    
}
 
module.exports.help = {
name: "new"
}
