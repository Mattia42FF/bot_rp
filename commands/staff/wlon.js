const Discord = require("discord.js")

module.exports = {
    name: "wlon",
    description: "Aprire le Whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010092294722035803")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**<:Annuncio:1007028652917149848>｜__Whitelist Aperte!__**")
            .setColor("GREEN")
            .setDescription("**Avvisiamo che le Whitelist sono ora Aperte, affrettatevi!**")
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ content: "<@&1010114357352484868>", embeds: [embed] });


    }}}        
