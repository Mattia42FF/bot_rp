const Discord = require("discord.js")

module.exports = {
    name: "espu",
    description: "Espulsione dalla sessione l'utente",
    execute(message, args) {

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Espulsione Utente**__")
            .setColor("RED")
            .setDescription(`**Attenzione, siete pregati di espellere dalla sessione *${testo}*, grazie!**`)
            .setFooter({text: "Espulsione Giocatore"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}  