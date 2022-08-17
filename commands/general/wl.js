const Discord = require("discord.js")

module.exports = {
    name: "wl",
    description: "Per richiedere una Whitelist",
    execute(message, args) {

        {
            if (!message.member.roles.cache.has("999277852149153863")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 
        
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:req:1007029299016118342> __**Richiesta Whitelist**__ <:req:1007029299016118342>")
            .setColor("YELLOW")
            .setThumbnail("https://cdn.discordapp.com/icons/939800651599331348/178d4c12185851ba950a5aa875faa793.png?size=128")
            .setDescription(`**${message.author.toString()}, hai appena richiesta una Whitelist. Attendi un Whitelist Manager disponibile per effettuare il Colloquio, attenda...**`)
            .setFooter({text: "Project Italy RP"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}} 