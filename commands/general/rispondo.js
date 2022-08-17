const Discord = require("discord.js")

module.exports = {
    name: "rispondo",
    description: "Per rispondere a un Post",
    execute(message, args) {
        
        {
            if (!message.member.roles.cache.has("999277695991042148")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:chat:1007029192489177258> __**Risposta Post!**__ <:chat:1007029192489177258>")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/icons/939800651599331348/178d4c12185851ba950a5aa875faa793.png?size=128")
            .setDescription(`**${message.author.toString()} Ha Appena Risposto al Post: ${testo}.**`)
            .setFooter({ text: "Project Italy RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}}