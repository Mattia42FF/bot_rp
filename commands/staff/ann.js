const Discord = require("discord.js")

module.exports = {
    name: "ann",
    description: "per annullare un'azione RP",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010097091776880712")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("**Inserire un messaggio!**");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**<a:attenzions:1016316252345610390>｜__Azione RP Annullata__**")
            .setColor("RED")
            .setDescription(`**${message.author.toString()} Ha Annullato Questa/e Azione/i:** ***\n${testo}***`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()
            
            message.channel.send({ content: "<@&1010114483890430012>", embeds: [embed] });

    }}}