const Discord = require("discord.js")

module.exports = {
    name: "wl",
    description: "Per richiedere una Whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("999277852149153863")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:req:1007029299016118342> __**Richiesta Whitelist**__ <:req:1007029299016118342>")
            .setColor("YELLOW")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setDescription(`**${message.author.toString()}, hai appena richiesta una Whitelist. Attendi un Whitelist Manager disponibile per effettuare il Colloquio, attenda...**`)
            .setFooter({text: "Project Italy RP"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}} 