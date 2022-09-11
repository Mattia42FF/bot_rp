const Discord = require("discord.js")

module.exports = {
    name: "approved",
    description: "Per accettare un bando staff",
    execute(message, args) {

        let user = message.mentions.members.first()

        {
            if (!message.member.roles.cache.has("1010097091776880712")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            }

            var embed = new Discord.MessageEmbed()
                .setTimestamp("**__Bando Approvato!__**")
                .setColor("GREEN")
                .setDescription(`La informo che il suo Bando per Diventare un Whitelister Manager è stato approvato, ora appena può contatti un Founder per stabilire un orario per il Colloquio Orale, complimenti!`)
                .addField('Bando Whitelister', 'Approvato', true)
                .setFooter({ text: "Italian Rome Full RP"})
                .setTimestamp()

            user.send({ embeds: [embed] })
        }}}