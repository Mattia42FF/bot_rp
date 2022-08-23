const Discord = require("discord.js")

module.exports = {
    name: "carica",
    description: "Per prendersi in carica un Ticket",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010097091776880712")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 


        message.delete()

    var embed = new Discord.MessageEmbed()
        .setTitle("__**🎟️ Ticket Preso In Carica! 🎟️**__")
        .setColor("RANDOM")
        .setDescription(`*Il Ticket è stato preso in carica da ${message.author.toString()}!*`)
        .setFooter({text: "Italian Rome Full RP" })
        .setTimestamp()
        
        message.channel.send({ embeds: [embed] })
    }}}