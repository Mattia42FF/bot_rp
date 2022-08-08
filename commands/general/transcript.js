const Discord = require("discord.js")

module.exports = {
    name: "transcript",
    description: "Transcrizione dei messaggi",
    execute(async, message, args) {

            let chatLog = `--- Chat Logs #${message.channel.name} --- \n\n`
            let messages = await getAllMessages(message.channel)
            messages.reverse().forEach(msg => {
                chatLog += `@${msg.author.tag} ID: ${message.author.id} - ${msg.createdAt.toLocaleString()}\n`

                if (msg.content) chatLog += `${msg.content}\n`

                if (msg.embed[0]) {
                    chatLog += `Embed:\n`
                    if (msg.embeds[0].title) chatLog += `Tile: ${msg.embeds[0].title}\n`
                    if (msg.embeds[0].description) chatLog += `Description: ${msg.embeds[0].description}\n`
                    if (msg.embeds[0].fields) chatLog += `Field: ${msg.embeds[0].fields.map(x => `${x.name}-${x.value}}`).join(", ")}\n`
                }

                if (msg.attachments.siza > 0)
                    chatLog += `Files: ${msg.attachments.map(x => `${x.name} (${x.url})`).join(", ")}\n`

                if (msg.stickers.siza > 0)
                    chatLog += `Stickers: ${msg.stickers.map(x => `${x.name} (${x.url})`).join(", ")}\n`

                chatLog += "\n"    
            })

            let attachment = new Discord.MessageAttachment(Buffer.from(chatLog, "utf-8"), `chatLog-channel-${message.channel.id}.txt`)

            let embed = new Discord.MessageEmbed()
                .setTitle("__**Transcript del Canale**__")
                .setColor("RANDOM")
                .setDescription("*Ecco il log di tutti i messaggi di questo canale.*")

            message.channel.send({ embeds: [embed], files: [attachment] })    

        const getAllMessages = async (channel) => {
            let allMessages = []
            let lastMessages

            while (true) {
                const options =  { limit: 100 }
                if (lastMessages) options.before = lastMessages

                let messages = await channel.messages.fetch(options)

                allMessages = allMessages.concat(Array.from(messages.values()))

                lastMessages = messages.last().id

                if (messages.size != 100) {
                    break
                }
            }

            return allMessages
        }}}