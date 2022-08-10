const Discord = require("discord.js")

module.exports = {
    name: "rispondo",
    description: "Per rispondere a un Post",
    execute(message, args) {
        
        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Risposta Post!**__")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} Ha Appena Risposto al Post: ${testo}.**`)
            .setFooter({ text: "Risposta" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}  