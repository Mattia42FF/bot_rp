const Discord = require("discord.js")

module.exports = {
    name: "wloff",
    description: "Chiudere le Whitelist",
    execute(message, args) {
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**__Whitelist Chiuse!__**")
            .setColor("RED")
            .setDescription("**Avvisiamo che le Whitelist sono chiuse, presto riapriranno!**")
            .setThumbnail("https://cdn.discordapp.com/emojis/881451528345493535.gif?size=96&quality=lossless")
            .setFooter({text: "Whitelist"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }} 