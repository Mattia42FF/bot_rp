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
            .setThumbnail("https://cdn.discordapp.com/icons/939800651599331348/178d4c12185851ba950a5aa875faa793.png?size=128")
            .setDescription(`**Hey ${message.author.toString()}, hai appena richiesta supporto allo Staff del Server, __uno Staff arriverà qui a breve. Nel frattempo è pregato di scrivere il motivo della richiesta di Supporto__.**`)
            .setFooter({text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}