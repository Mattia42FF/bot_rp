const Discord = require("discord.js")

module.exports = {
    name: "richiesta",
    description: "Invia una richiesta allo staff",
    execute(message, args) {

        message.channel.send(`*${message.author.toString()} La tua richiesta è stata correttamente salvata, ora attendi!*`)

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un messaggio");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }
        message.delete()

        const embed = new Discord.MessageEmbed()
            .setTimestamp("**📌｜__Richiesta Ruoli__**")
            .setColor("RANDOM")
            .setDescription(`**Ha appena richiesto questo ruolo:*** **\n${testo}**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            client.channels.cache.get("1016321708594036786").send({content: `${message.author.toString()}`, embeds: [embed]})
    }
}
