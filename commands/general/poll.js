const Discord = require("discord.js")

module.exports = {
    name: "poll",
    description: "Fare un sondaggio",
    execute(message, args) {

            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");
            if (!testo) {
                return message.channel.send("**Inserisci un messaggio!**");
            }

            if (message.content.includes("@everyone") || message.content.includes("@here")) {
                return message.channel.send("**Non taggare everyone o here!**");
            }

            message.delete()
            
            var embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("<:annunce:1007031335552036965> __Sondaggio!__ <:annunce:1007031335552036965>")
                .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
                .setDescription(`**${message.author.toString()} Ha Fatto Questo Sondaggio:\n${testo}**`)
                .setFooter({text: "Milano RP Bot"})
                .setTimestamp()
    
            message.channel.send({embeds: [embed]})
            .then(msg => {
                msg.react("✅")
                msg.react("❌")
              })
        }
    }