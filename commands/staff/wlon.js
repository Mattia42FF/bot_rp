const Discord = require("discord.js")

module.exports = {
    name: "wlon",
    description: "Aprire le Whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("998983373445922938")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**__Whitelist Aperte!__**")
            .setColor("GREEN")
            .setDescription("**Avvisiamo che le Whitelist sono ora Aperte, affrettatevi!**")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setFooter({text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}        
