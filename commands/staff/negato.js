const Discord = require("discord.js")

module.exports = {
    name: "wln",
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
            .setTitle("**<:Rifiutato:1007556854580260894>｜__Whitelist Negata!__**")
            .setColor("RANDOM")
            .addField('Nickname Utente:', `*${testo}*`, false)
            .addField('Whitelist', '*Negata*', false)
            .addField('Whitelist Eseguita da:',  `*${message.author.toString()}*`, false)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}}