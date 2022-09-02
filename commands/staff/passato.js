const Discord = require("discord.js")

module.exports = {
    name: "passato",
    description: "Per far passare l utente alla whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010092294722035803")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        
        message.delete()

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("<:Accettato:1007556821625622668> __**Whitelist Passata**__ <:Accettato:1007556821625622668>")
            .setColor("RANDOM")
            .addField('Whitelist', 'Passata', false)
            .addField('Whitelist Eseguita da:',  `*${message.author.toString()}*`, false)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}}           