const Discord = require("discord.js")

module.exports = {
    name: "annuncio",
    description: "Per fare un annuncio",
    execute(message, args) {

        message.delete()

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        var embed = new Discord.MessageEmbed()
           .setTitle("<:Staff:1005798250852397056>__**Annuncio!**__<:Staff:1005798250852397056>")
           .setColor("RANDOM")
           .setDescription(`***${message.author.toString()} Ha Mandato Questo Annuncio:*** **\n${testo}**`)
           .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
           .setImage("https://cdn.discordapp.com/attachments/935843412056350730/939567617847492628/How-to-Announce-your-Engagement.png")
           .setFooter("Milano RP Bot")
           .setTimestamp()

           message.channel.send({ embeds: [embed] })

    }}   