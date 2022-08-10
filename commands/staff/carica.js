const Discord = require("discord.js")

module.exports = {
    name: "carica",
    description: "Per prendersi in carica un Ticket",
    execute(message, args) {

        message.delete()

    var embed = new Discord.MessageEmbed()
        .setTitle("__**Ticket Preso In Carica!**__")
        .setColor("RANDOM")
        .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
        .setDescription(`*Il Ticket è stato preso in carica da ${message.author.toString()}!*`)
        .setFooter({text: "Milano RP Bot Ticket"})
        .setTimestamp()
        
        message.channel.send({ embeds: [embed] })
    }}