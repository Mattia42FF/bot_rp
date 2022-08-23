const Discord = require("discord.js")

module.exports = {
    name: "wl",
    description: "Per richiedere una Whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010114357352484868")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:req:1007029299016118342> __**Richiesta Whitelist**__ <:req:1007029299016118342>")
            .setColor("YELLOW")
            .setDescription(`**${message.author.toString()}, hai appena richiesta una Whitelist. Attendi un Whitelist Manager disponibile per effettuare il Colloquio, attenda...**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}} 