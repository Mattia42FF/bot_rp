const Discord = require("discord.js")

module.exports = {
    name: "commento",
    description: "Per commentare un Post",
    execute(message, args) {
        
        {
            if (!message.member.roles.cache.has("1010114483890430012")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            } 

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:chat:1007029192489177258> __**Nuovo Commento!**__ <:chat:1007029192489177258> ")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} Ha Appena Commentato al Post: ${testo}.**`)
            .setFooter({text: "Italian Rome Full RP" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}}               