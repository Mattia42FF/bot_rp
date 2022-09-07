const Discord = require("discord.js")

module.exports = {
    name: "reg",
    description: "Per mandare il regolamento a chi lo richiede",
    execute(message, args) {

        let embed = new Discord.MessageEmbed()
            .setTitle("Regolamento")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} Ecco a te il Link del Regolamento, clicca il pulsane qui sotto per visitare la pagina!**`)
            .setFooter({ text: "Italian Rome Fulll RP" })
            .setTimestamp()

            let button1 = new Discord.MessageButton()
                .setLabel("Regolamento")
                .setStyle("LINK")
                .setURL("https://docs.google.com/document/d/13ltg17Ek0A3b-m6d2cPRALWM4Hb4iSE7ciP3HmI-M9A/edit?usp=sharing")
                .setCustomId("Reg1")
                .setEmoji("📑")

                let row = new Discord.MessageActionRow()
                    .addComponents(button1)

        message.channel.send({ embeds: [embed], components: [row] })
    }}