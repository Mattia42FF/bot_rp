const Discord = require("discord.js")

module.exports = {
    name: "aiuto",
    description: "Per chiedere supporto allo Staff",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("999277695991042148")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:help:1007030626043580418> __**Richiesta Supporto**__ <:help:1007030626043580418> ")
            .setColor("GREEN")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setDescription(`**Hey ${message.author.toString()}, hai appena richiesta supporto allo Staff del Server, __uno Staff arriverà qui a breve. Nel frattempo è pregato di scrivere il motivo della richiesta di Supporto__.**`)
            .setFooter({text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}