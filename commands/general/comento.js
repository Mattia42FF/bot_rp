const Discord = require("discord.js")

module.exports = {
    name: "commento",
    description: "Per commentare un Post",
    execute(message, args) {
        
        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("<:chat:1007029192489177258> __**Nuovo Commento!**__ <:chat:1007029192489177258> ")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/icons/998926402281803809/f7b7542552b66584898b3903de8c6467.png?size=128")
            .setDescription(`**${message.author.toString()} Ha Appena Commentato al Post: ${testo}.**`)
            .setFooter({ text: "Milano RP Bot" })
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}                