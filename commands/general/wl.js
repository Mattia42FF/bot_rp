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
            .setTitle("**<:Requisiti:1007029299016118342>｜__Richiesta Whitelist__**")
            .setColor("YELLOW")
            .setDescription(`**${message.author.toString()}, hai appena richiesta una Whitelist. Attendi un Whitelist Manager disponibile per effettuare il Colloquio, attenda...**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ content: "<@&1010092294722035803>", embeds: [embed] });

    }}} 