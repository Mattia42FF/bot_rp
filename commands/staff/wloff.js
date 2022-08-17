const Discord = require("discord.js")

module.exports = {
    name: "wloff",
    description: "Chiudere le Whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("998983373445922938")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**__Whitelist Chiuse!__**")
            .setColor("RED")
            .setDescription("**Avvisiamo che le Whitelist sono chiuse.**")
            .setThumbnail("https://cdn.discordapp.com/icons/939800651599331348/178d4c12185851ba950a5aa875faa793.png?size=128")
            .setFooter({text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}