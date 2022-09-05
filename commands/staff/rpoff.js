const Discord = require("discord.js")

module.exports = {
    name: "rpoff",
    description: "Per mandare Offline l'RP",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010092295250518066")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**<:Rifiutato:1007556854580260894>｜__RP Offline!__**")
            .setColor("WHITE")
            .setDescription(`**__L'RP è appena terminato__, vi ricordiamo di richiedere il vostro Stipendio Giornaliero.**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ content: "<@&1010114483890430012>", embeds: [embed] });

    }}}