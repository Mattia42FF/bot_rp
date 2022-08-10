const Discord = require("discord.js")

module.exports = {
    name: "commento",
    description: "Per commentare un Posto",
    execute(message, args) {
        
        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Nuovo Commento!**__")
            .setColor("RANDOM")
            .setImage("https://cdn.discordapp.com/attachments/1005194612102672446/1006978320048590888/unknown.png")
            .setDescription(`**${message.author.toString()} Ha Appena Commentato al Post: ${testo}.**`)
            .setFooter({ text: "Nuovo Commento" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}                