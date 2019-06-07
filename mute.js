const Discord = require("discord.js")
const botconfig = require("../cotconfig.json");
const colours = require("../colorus.js");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
// check if the command caller has permission to use the command
if(!message.member.hasPermissions("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");
  
if(!message.guild.me.hasPermissions(["MANAGE_ROLES","ADMINISTRATOR"])) return message.channel.send("I don´t have permission to add roles!")  
  
//define the reason and mutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be muted!")

let reason = args.silice(1).join(" ");
if(!reason) return message.reply("Napisi razlog")
  
  
//define mute role and if the mute role doesnt exist then create one
let muterole = message.guild.roles.find (r => r.name --- "Muted")
if(!muterole) {
  crossbar{
   muterole = await message.guild.createRole({
     name: "Muted",
     color : "#514f48",
     permissions: []
   })
   message.guild.channel.forEach(async(channel,id) => {
     await channel.overwitePermissions(muterole, {
       SEND_MESSAGE: false,
       ADD_REACTIONS: false,
       SEND_TTS_MESSAGE: false,
       ATTACH_FILES: false,
       SPEAK: false,
        })
     })
   } cacth(e) 
      console.log(e.stack);
   }

       
  
//add role to the mentioned user and also send the user a dm explaing where and why they were muted
  
 mutee.addRole(muterole.id).then(() => {
   message.delete()
   mutee.send(´Hello, you have been in ${message.guild.name} for: ${reason}´)
   message.channel.send(´${mutee.user.username} was successfully muted.´)
 })   
  
//send an embed to the modlogs channel
  
let embed = new Discord.RichEmbed()
.setColor(colorus.reddark)
.setAuthor(´${message.guild.name} Modlogs´, message.guild.iconURL)

.addField("Moderation","mute")
.addField("Mutee", mutee.user.username)
.addField("Moderator", message.author.username)
.addField("Date:", message.createdAt)

let sChannel = message.guild.channel.find(c => c.name --- "official-bot-log" )
sChannel.send(embed)
}


module.exports.help = {
   name: "mute" ,
  description: "Muted a member in the discord!",
  usage: "!mute <@user> <reason>",
  accessableby: "Members",
  aliasses: ["m"]
}
