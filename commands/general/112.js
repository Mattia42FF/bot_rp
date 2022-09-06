const Discord = require("discord.js")

module.exports = {
    name: "112",
    description: "Chiamare il 112",
    execute(message, args) {

        let embed2 = new Discord.MessageEmbed()
            .setTitle("__**Centralino 112**__")
            .setColor("RANDOM")
            .setDescription("**Sta rispondendo il Centralino del 112, qual'è la sua emergenza? Clicca uno dei bottoni qui sotto per richiedere un servizio d'emergenza!**")
            .setImage("https://cdn.discordapp.com/attachments/1005194612102672446/1016593963047731200/unknown.png")
            .setFooter({text: "Italian Rome Full RP"})
            .setTimestamp()

        let button2 = new Discord.MessageButton()
            .setLabel("Testo bottone")
            .setCustomId("idBottone2")
            .setStyle("PRIMARY")

        let button3 = new Discord.MessageButton()
            .setLabel("Testo bottone")
            .setCustomId("idBottone3")
            .setStyle("PRIMARY")

        let row2 = new Discord.MessageActionRow() //Massimo 5 bottoni per riga
            .addComponents(button2)
            .addComponents(button3)

        message.channel.send({ embeds: [embed2], components: [row2] }) //Si possono inserire massimo 5 righe (Es: components: [row1, row2, row3])
    }
}