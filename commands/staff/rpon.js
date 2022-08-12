const Discord = require("discord.js")

module.exports = {
    name: "rpon",
    description: "Per mandare Online l'RP",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("998988240088473742")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");
            if (!testo) {
                return message.channel.send("**Inserisci un messaggio!**");
            }

        var embed = new Discord.MessageEmbed()
            .setTitle("__**RP Online!**__")
            .setColor("BLUE")
            .setThumbnail("https://cdn.discordapp.com/emojis/891315683097473064.webp?size=96&quality=lossless")
            .setDescription(`**__L'RP è appena iniziato__, per entrare in Sessione unitevi da: *${testo}*. Buon RP!**`)
            .setFooter({text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}