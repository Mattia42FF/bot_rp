const Discord = require("discord.js")

module.exports = {
    name: "sex",
    description: "Per fare un azione RP sex",
    execute(message, args) {
        
        {
            if (!message.member.roles.cache.has("1010114483890430012")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**💘｜__Azione Sex__**")
            .setColor("#f47fff")
            .setDescription(`**${message.author.toString()} Ha Appena Fatto un'Azione Sex:\n${testo}**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

        }}}