const Discord = require("discord.js")

module.exports = {
    name: "annuncio",
    description: "Per fare un annuncio",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("998988979724615700")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        message.delete()

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        var embed = new Discord.MessageEmbed()
           .setTitle("<:Announcement:979766378124959774> __**Annuncio!**__ <:Announcement:979766378124959774>")
           .setColor("RANDOM")
           .setDescription(`***${message.author.toString()} Ha Mandato Questo Annuncio:*** **\n${testo}**`)
           .setImage("https://cdn.discordapp.com/attachments/935843412056350730/939567617847492628/How-to-Announce-your-Engagement.png")
           .setFooter({text: "Italian Rome Full RP" })
           .setTimestamp()

           message.channel.send({ embeds: [embed] })

    }}}