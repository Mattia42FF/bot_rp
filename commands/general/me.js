const Discord = require("discord.js")

module.exports = {
    name: "me",
    description: "Per fare un azione RP",
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
            .setTitle("**🏃🏻‍♂️｜__Azione RP__**")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} Ha Appena Fatto un'Azione:\n${testo}**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

        }}}