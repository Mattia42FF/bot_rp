const Discord = require("discord.js")

module.exports = {
    name: "aiuto",
    description: "Per chiedere supporto allo Staff",
    execute(message, args) {
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:Libro:1007028780419792917> __**Richiesta Supporto**__ <:Libro:1007028780419792917>")
            .setColor("GREEN")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setDescription(`**Hey ${message.author.toString()}, hai appena richiesta supporto allo Staff del Server, __uno Staff arriverà qui a breve. Nel frattempo è pregato di scrivere il motivo della richiesta di Supporto__.**`)
            .setFooter({text: "Milano RP Bot"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}  