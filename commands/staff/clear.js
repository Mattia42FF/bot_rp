const Discord = require("discord.js")

module.exports = {
    name: "clear",
    description: "Per cancellare dei messaggi",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("998988979724615700")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 


        message.delete()

        {
            if (!message.member.permissions.has("MANAGE_MESSAGES")) {
                return message.channel.send('**Non hai il Permesso!**');
            }
            if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
                return message.channel.send('**Non possiedo i permessi!**');
            }
            let count = parseInt(message.content.split(/\s+/)[1]);
            if (!count) {
                return message.channel.send("**Inserisci un numero valido da: __(0 - 100)__.**")
            }
            if (count > 100) {
                return message.channel.send("**Non puoi cancellare più di 100 messaggi!**")
            }
            message.channel.bulkDelete(count, true)
            message.channel.send(count + " **Messaggi Eliminati con Successo!**").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }
    }}}