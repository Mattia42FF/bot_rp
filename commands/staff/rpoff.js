const Discord = require("discord.js")

module.exports = {
    name: "rpoff",
    description: "Per mandare Offline l'RP",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010092295250518066")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**RP Offline!**__")
            .setColor("WHITE")
            .setDescription(`**__L'RP è appena terminato__, vi ricordiamo di richiedere il vostro Stipendio Giornaliero.**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}