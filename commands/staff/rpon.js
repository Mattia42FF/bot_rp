const Discord = require("discord.js")

module.exports = {
    name: "rpon",
    description: "Per mandare Online l'RP",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010092295250518066")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");
            if (!testo) {
                return message.channel.send("**Inserisci un messaggio!**");
            }

        var embed = new Discord.MessageEmbed()
            .setTitle("**<:Accettato:1007556821625622668>｜__RP Online!__**")
            .setColor("BLUE")
            .setDescription(`**__L'RP è appena iniziato__, per entrare in Sessione unitevi da: *${testo}*. Buon RP!**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ content: "<@&1010114483890430012>", embeds: [embed] });

    }}}