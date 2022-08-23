const Discord = require("discord.js")

module.exports = {
    name: "wloff",
    description: "Chiudere le Whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010092294722035803")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**__Whitelist Chiuse!__**")
            .setColor("RED")
            .setDescription("**Avvisiamo che le Whitelist sono chiuse.**")
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}