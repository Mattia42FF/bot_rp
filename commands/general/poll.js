const Discord = require("discord.js")

module.exports = {
    name: "poll",
    description: "Fare un sondaggio",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("1010114483890430012")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

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
                .setDescription(`**${message.author.toString()} Ha Fatto Questo Sondaggio:\n${testo}**`)
                .setFooter({text: "Italian Rome Full RP" })
                .setTimestamp()
    
                message.channel.send({ content: "<@&1010114483890430012>", embeds: [embed] })
            .then(msg => {
                msg.react("✅")
                msg.react("❓")
                msg.react("❌")
              })
        }
    }}