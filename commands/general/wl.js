const Discord = require("discord.js")

module.exports = {
    name: "wl",
    description: "Per richiedere una Whitelist",
    execute(message, args) {
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Richiesta Whitelist**__")
            .setColor("YELLOW")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setDescription(`**${message.author.toString()}, hai appena richiesta una Whitelist. Attendi un Whitelist Manager disponibile per effettuare il Colloquio, attenda...**`)
            .setFooter({text: "Richiesta Whitelist"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}  