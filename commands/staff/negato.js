const Discord = require("discord.js")

module.exports = {
    name: "negato",
    description: "Rimandare la whitelist",
    execute(message, args) {
        
        message.delete()

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("<:Rifiutato:1007556854580260894> __**Whitelist Negata**__ <:Rifiutato:1007556854580260894>")
            .setColor("RANDOM")
            .addField('Whitelist Eseguita da:',  `${message.author.toString()}`, false)
            .addField('Whitelist Negata:', `*${testo}*`, false)
            .setFooter({ text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
} 