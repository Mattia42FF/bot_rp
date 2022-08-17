const Discord = require("discord.js")

module.exports = {
    name: "poll",
    description: "Fare un sondaggio",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("999277695991042148")) {
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
                .setTitle("<:annunce:1007031335552036965> __Sondaggio!__ <:annunce:1007031335552036965>")
                .setThumbnail("https://cdn.discordapp.com/icons/939800651599331348/178d4c12185851ba950a5aa875faa793.png?size=128")
                .setDescription(`**${message.author.toString()} Ha Fatto Questo Sondaggio:\n${testo}**`)
                .setFooter({text: "Project Italy RP"})
                .setTimestamp()
    
            message.channel.send({embeds: [embed]})
            .then(msg => {
                msg.react("✅")
                msg.react("❌")
              })
        }
    }}