const Discord = require("discord.js")

module.exports = {
    name: "112",
    description: "Per chiamare un servizio d'emergenza",
    execute(message, args) {
        
        {
            if (!message.member.roles.cache.has("1010114483890430012")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("**💘｜__112__**")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} Ciao, questo è il Centralino 112, quale servizio richiede? Clicca un pulsate qui sotto e di seguito scriva l'ID PS.**`)
            .setImage("https://cdn.discordapp.com/attachments/1005194612102672446/1016593963047731200/unknown.png")
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

        let button1 = new Discord.MessageButton()
            .setLabel("Polizia di Stato")
            .setStyle("PRIMARY")
            .setCustomId("police1")

        let row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embed], components: [row] })

        }}}

