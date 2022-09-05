const Discord = require("discord.js")

module.exports = {
    name: "anon",
    description: "Per fare un azione anonima",
    execute(message, args) {
        
        {
            if (!message.member.roles.cache.has("1010116020213661737")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**💀｜__Messaggio Anonimo__**")
            .setColor("RANDOM")
            .setDescription(`**${testo}**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

        }}}