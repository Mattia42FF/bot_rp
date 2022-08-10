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
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setFooter({text: "Milano RP Bot Whitelist" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }} 