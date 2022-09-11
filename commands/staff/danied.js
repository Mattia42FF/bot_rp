const Discord = require("discord.js")

module.exports = {
    name: "denied",
    description: "Per negare un bando staff",
    execute(message, args) {

        let user = message.mentions.members.first()

        {
            if (!message.member.roles.cache.has("1010097091776880712")) {
                return message.channel.send("**Non puoi eseguire questo comando perchè non hai il ruolo!**");
            }

            var embed = new Discord.MessageEmbed()
                .setTitle("**<a:sdd:1018445039812227103>｜__Bando Negato__**")
                .setColor("GREEN")
                .setDescription(`*La informo che il suo Bando per diventare un Whitelister Manager è stato **negato**, potra ritentare a fare il bando fra 3 giorni!*`)
                .setFooter({ text: "Italian Rome Full RP"})
                .setTimestamp()

                message.channel.send("*Il messaggio è stato inviato correttamente all'utente da te selezionato.*")

            user.send({ embeds: [embed] })
        }}}