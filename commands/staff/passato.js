const Discord = require("discord.js")

module.exports = {
    name: "passato",
    description: "Per far passare l utente alla whitelist",
    execute(message, args) {
        
        message.delete()

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("<:Accettato:1007556821625622668> __**Whitelist Passata**__ <:Accettato:1007556821625622668>")
            .setColor("RANDOM")
            .addField('Whitelist Eseguita da:',  `*${message.author.toString()}*`, false)
            .addField('Motivo', `*${testo}*`, false)
            .setFooter({ text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}                