const Discord = require("discord.js")

module.exports = {
    name: "espu",
    description: "Espulsione dalla sessione l'utente",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010092295250518066")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:Attenzione:1007028886615375884> __**Espulsione Utente**__ <:Attenzione:1007028886615375884> ")
            .setColor("RED")
            .setDescription(`**Attenzione, siete pregati di espellere dalla sessione *${testo}*, grazie!**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}