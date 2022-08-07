const Discord = require("discord.js")

module.exports = {
    name: "invite",
    description: "Invia il link d invito del bot",
    execute(message) {
        let embed = new Discord.MessageEmbed()    
            .setTitle("__**Link Invito Bot**__")
            .setColor("RANDOM")
            .setDescription(`*${message.author.toString()} Clicca il pulsante qui sotto per invitare il Bot!*`)
            .setFooter({text: "Invito al Bot!"})
            .setTimestamp()

        message.channel.send({ embeds: [embed], components: [row], ephemeral: true })
        
        let button = new Discord.MessageButton()
            .setCustomId('IdBut1')
            .setLabel('Invito Bot')
            .setStyle('LINK')
            .setEmoji(':envelope_with_arrow:')
            .setURL("https://discord.com/api/oauth2/authorize?client_id=1004779665749188629&permissions=8&scope=bot")
        let row = new Discord.MessageActionRow().addComponents(button)
    }
}