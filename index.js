const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] }
)

client.login(process.env.token)

client.on("ready", () => {
     console.log("Bot Avviato!")
})

const fs = require("fs");
// const { CLIENT_RENEG_LIMIT } = require("tls")

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandsFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const commands = require(`./commands/${folder}/${file}`);
        client.commands.set(commands.name, commands);
    }
}

client.on("messageCreate", message => {
    const prefix = "a!";

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(!client.commands.has(command)) return

    client.commands.get(command).execute(message, args);
})

// Codice che si collega al help.js
client.on("interactionCreate", interaction => {
    if (!interaction.isSelectMenu()) return

    if (interaction.customId.startsWith("menuHelp")) {
        let idUtente = interaction.customId.split(",")[1]
        if (interaction.user.id != idUtente) return interaction.reply({ content: "*Questo bottone non è tuo!*", ephemeral: true })
       interaction.deferUpdate()
       
      switch(interaction.values[0]) {
        case "pagina1": {
            let embed = new Discord.MessageEmbed()
                .setTitle("Staff Commands")
                .setColor("GREEN")
                .addField('`a!ann`', '**Per annullare una Azione RP**')
                .addField('`a!carica`', '**Per prendere in carica un Ticket**')
                .addField('`a!clear`', '**Per cancellare dei messaggi**')
                .addField('`a!rpon`', '**Per mandare Online il Server**')
                .addField('`a!rpoff`', '**Per mandare Offline il Server**')
                .addField('`a!wlon`', '**Aprire le Whitelist*')
                .addField('`a!wloff`', '**Chiudere le Whitelist**')
                .setFooter({text: "Staff"})
                .setTimestamp()

        interaction.message.edit({ embeds: [embed] })    
        } break
        case "pagina2": {
            let embed = new Discord.MessageEmbed()
                .setTitle("General Commands")
                .setColor("RED")
                .addField('`a!annuncio`', '**Per mandare un Annuncio**')
                .addField('`a!invite`', '**Invia il Link del Bot**')
                .addField('`a!help`', '**Per vedere i Comandi del Bot**')
                .addField('`a!poll`', '**Per fare un sondaggio**')
                .addField('`a!say`', '**Per far mandare un messaggio al Bot**')
                .setFooter({text: "General"})
                .setTimestamp()

        interaction.message.edit({ embeds: [embed] }) 
        } break
        case "pagina3": {
            let embed = new Discord.MessageEmbed()
                .setTitle("RP Commands")
                .setColor("YELLOW")
                .addField('`a!aiuto`', '**Per richiedere Assistenza allo Staff**')
                .addField('`a!espu`', '**Per comunicare che un utente dovrà essere espulso dalla Sessione**')
                .addField('`a!wl`', '**Per richiedere una Whitelist**')
                .setFooter({text: "RP"})
                .setTimestamp()
 
        interaction.message.edit({ embeds: [embed] }) 
        } break
      }
}})