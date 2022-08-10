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
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setDescription(`**Attenzione, siete pregati di espellere dalla sessione *${testo}*, grazie!**`)
            .setFooter({text: "Milano RP Bot" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}  