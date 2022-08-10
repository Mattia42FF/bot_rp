const Discord = require("discord.js")

module.exports = {
    name: "rpoff",
    description: "Per mandare Offline l'RP",
    execute(message, args) {
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**RP Offline!**__")
            .setColor("WHITE")
            .setThumbnail("https://cdn.discordapp.com/emojis/891315682858393651.webp?size=96&quality=lossless")
            .setDescription(`**__L'RP è appena terminato__, vi ricordiamo di richiedere il vostro Stipendio Giornaliero.**`)
            .setFooter({text: "Milano RP Bot" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}  