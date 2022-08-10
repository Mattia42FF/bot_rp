const Discord = require("discord.js")

module.exports = {
    name: "help",
    description: "Manda la lista dei comandi del bot",
    execute(message, args) {

        message.delete()

        let embed = new Discord.MessageEmbed()
            .setTitle("<:Libro:1007028780419792917> __Aiuto Comandi__<:Libro:1007028780419792917> ")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setDescription(`**${message.author.toString()} Seleziona la pagina con il menu qua sotto, per vedere tutte le sezioni disponibili ⤵**`)
            .setFooter({ text: "Milano RP Bot" })
            .setTimestamp()

        let select = new Discord.MessageSelectMenu()
            .setCustomId(`menuHelp,${message.author.id}`)
            .setPlaceholder("Seleziona una pagina") 
            .setMinValues(1) 
            .setMaxValues(1)
            .addOptions([
                {
                    label: "Staff Commands",
                    description: "Vai alla pagina numero 1",
                    value: "pagina1",
                    emoji: "<:Staff:1005798250852397056>"
                },
                {
                    label: "General Commands",
                    description: "Vai alla pagina numero 2",
                    value: "pagina2",
                    emoji: "<:PepePolice:1005798249073999882>"
                },
                {
                    label: "RP Commands",
                    description: "Vai alla pagina numero 3",
                    value: "pagina3",
                    emoji: "<:Announce:1005798247148822569>"
                }
            ])
    
        let row = new Discord.MessageActionRow()
            .addComponents(select) 
            
        message.channel.send({ embeds: [embed], components: [row] })    
    }
}

