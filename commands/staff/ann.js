const Discord = require("discord.js")

module.exports = {
    name: "ann",
    description: "per annullare un'azione RP",
    execute(message, args) {


        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("**Inserire un messaggio!**");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Azione RP Annullata**__")
            .setColor("RED")
            .setDescription(`**${message.author.toString()} Ha Annullato Questa/e Azione/i:** ***\n${testo}***`)
            .setThumbnail("https://cdn.discordapp.com/emojis/951244419888189440.webp?size=96&quality=lossless")
            .setFooter({text: "Annullamento Azione"})
            .setTimestamp()
            
            message.channel.send({ embeds: [embed] })

    }}    