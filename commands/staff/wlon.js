const Discord = require("discord.js")

module.exports = {
    name: "wlon",
    description: "Aprire le Whitelist",
    execute(message, args) {
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**__Whitelist Aperte!__**")
            .setColor("GREEN")
            .setDescription("**Avvisiamo che le Whitelist sono ora Aperte, affrettatevi!**")
            .setThumbnail("https://cdn.discordapp.com/emojis/881451528668479499.gif?size=96&quality=lossless")
            .setFooter({text: "Whitelist"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}        
