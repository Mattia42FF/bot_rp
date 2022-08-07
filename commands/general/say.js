const Discord = require("discord.js")

module.exports = {
    name: "say",
    description: "Far mandare un messaggio al bot",
    execute(message, args) {

        message.delete()

        {
            const args = message.content.split(/\s+/);
            let testo;
            testo = args.slice(1).join(" ");
            if (!testo) {
                return message.channel.send("Inserire un messaggio");
            }

            message.channel.send(testo)

        }
    }}