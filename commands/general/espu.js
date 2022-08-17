const Discord = require("discord.js")

module.exports = {
    name: "espu",
    description: "Espulsione dalla sessione l'utente",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("998988240088473742")) {
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
            .setThumbnail("https://cdn.discordapp.com/icons/939800651599331348/178d4c12185851ba950a5aa875faa793.png?size=128")
            .setDescription(`**Attenzione, siete pregati di espellere dalla sessione *${testo}*, grazie!**`)
            .setFooter({text: "project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}}