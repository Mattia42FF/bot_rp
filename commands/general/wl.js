const Discord = require("discord.js")

module.exports = {
    name: "wl",
    description: "Per richiedere una Whitelist",
    execute(message, args) {
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Richiesta Whitelist**__")
            .setColor("YELLOW")
            .setDescription(`**${message.author.toString()}, hai appena richiesta una Whitelist. Attendi un Whitelist Manager disponibile per effettuare il Colloquio, attenda...**`)
            .setFooter({text: "Richiesta Whitelist"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}  