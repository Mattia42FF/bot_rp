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
                .setTitle("**<a:appp:1018442742105395241>｜__Bando Approvato!__**")
                .setColor("GREEN")
                .setDescription(`*La informo che il suo Bando per diventare un __Whitelister Manager è stato __**approvato**__, appena può contatti un Founder per stabilire un orario per il Colloquio Orale, complimenti!*`)
                .addField('Bando Whitelister:', '**Approvato**', false)
                .setFooter({ text: "Italian Rome Full RP"})
                .setTimestamp()

            user.send({ embeds: [embed] })
        }}}