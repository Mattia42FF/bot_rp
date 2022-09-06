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
            .setLabel("Polizia di Stato")
            .setCustomId("idBottone2")
            .setStyle("SUCCESS")
            .setEmoji("👮🏻‍♂️")

        let button3 = new Discord.MessageButton()
            .setLabel("Croce Rossa")
            .setCustomId("idBottone3")
            .setStyle("DANGER")
            .setEmoji("🚑")

        let row2 = new Discord.MessageActionRow() 
            .addComponents(button2)
            .addComponents(button3)

        message.channel.send({ embeds: [embed2], components: [row2] }) 
    }
}

client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.setCustomId == "idBottone2") {
        let embed = new Discord.MessageEmbed()
            .setTitle("__**Sto Inviando la Chiamata alla Centrale di Polizia...**__")
            .setColor("BLUE")
            .setDescription(`**${message.author.toString()} La chiamata è stata inviata correttamente alla Centrale, ora dovrà scrivere qui sotto la sua posizione tramite ID PS.**`)
            .setFooter({text: "Italian Rome Full RP"})
            .setTimestamp()

            client.channels.cache.get("1010176136921235496").send("Prova!")
    }