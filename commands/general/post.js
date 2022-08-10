const Discord = require("discord.js")

module.exports = {
    name: "post",
    description: "Per mandare un Posto + un commento",
    execute(message, args) {


        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("**Inserire un messaggio!**");
        }

        message.delete()

        

        let embed = new Discord.MessageEmbed()
            .setTitle("**__Nuovo Post!__**")
            .setDescription(`**${message.author.toString()} Ha Appena Pubblicato un Nuovo Post: ${testo}`)
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setFooter({text: "Milano RP Bot" })
            .setTimestamp()

        message.channel.send({ embeds: [embed], files: ["./Immagine.png"] })
    }
}