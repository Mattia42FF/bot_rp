const Discord = require("discord.js")

module.exports = {
    name: "prova",
    description: "prova comando",
    data: {
        name: "prova",
        description: "prova di comando"
    },
    execute(interaction) {
        var embed = new Discord.MessageEmbed()
            .setTitle("Prova")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
}