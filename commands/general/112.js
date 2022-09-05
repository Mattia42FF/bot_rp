const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "112",
    description: "Chiamare un servizio d'emergenza",
    execute(message, args) {


        let row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('IdBut1')
					.setLabel('Polizia di Stato')
					.setStyle('SUCCESS')
                    .setEmoji('👮🏻‍♂️')
            )        
            .addComponents(
				new MessageButton()
					.setCustomId('IdBut2')
					.setLabel('Croce Rossa Italiana')
					.setStyle('DANGER')
                    .setEmoji('🚑')
            )        
            
                var embed = new Discord.MessageEmbed()    
                    .setTitle("__**Centralino 112**__")
                    .setColor("RANDOM")
                    .setDescription(`*${message.author.toString()} Salve, ha appena chiamato il Centralino 112, di seguito troverà due bottoni, clicchi su quello che desidera.*`)
                    .setFooter({text: "112"})
                    .setTimestamp()

                message.channel.send({ embeds: [embed], components: [row], ephemeral: true })

                .then(msg => {
                    const collector = msg.createMessageComponentCollector()
                    
                    collector.on("collect", i => {
                        if(i.customId == 'IdBut1') {
                            let embed = new Discord.MessageEmbed()
                            .setTitle("🔨__**Chiamata Polizia di Stato**__🔨")
                            .setDescription("Sto inviando la chiamata al Centralino della Polizia di Stato, nel frattempo qui sotto scriva la sua posizione con ID PS!")
                            .setTimestamp()
                            i.reply({ embeds: [embed], ephemeral: true }) 
                            }

                            if(i.customId == 'IdBut2') {
                                let embed = new Discord.MessageEmbed()
                                .setTitle("🏃🏻‍♂️__**Comandi RP**__🏃🏻‍♂️")
                                .addField('`w!afk`', "**[Per andare AFK;]**")
                                .addField('`w!annuncio`', "**[Per mandare un'annuncio in Chat;]**")
                                .addField('`w!anon`', "**[Per mandare un messaggio in anonimo;]**")
                                .addField('`w!commands`', "**[Per vedere le liste complete dei comandi del Bot;]**")
                                .addField('`w!gmail`', "**[Per mandare una Mail;]**")
                                .addField('`w!info-role`', "**[Per vedere tutte le informazioni su un determinato Ruolo;]**")
                                .addField('`w!me`', "**[Per fare un'azione RP;]**")
                                .addField('`w!nevica`', "**[Per annunciare che sta iniziando a Nevicare;]**")
                                .addField('`w!news`', "**[Per mandare una News;]**")
                                .addField('`w!nuvoloso`', "**[Per annunciare che il Tempo si sta Annuvolando;]**")
                                .addField('`w!ping`', "**[Per vedere la Latenza del Bot;]**")
                                .addField('`w!piove`', "**[Per annunciare che sta Piovendo;]**")
                                .addField('`w!poll`', "**[Per mandare un sondaggio;]**")
                                .addField('`w!server-info`', "**[Per vedere le informazioni sul Server;]**")
                                .addField('`w!sole`', "**[Per annunciare che che ci sarà il Sole;]**")
                                .addField('`w!sup`', "**[Per richiedere supporto allo Staff del Server;]**")
                                .addField('`w!wz`', "**[Per mandare un messaggio tramite Whatsapp.]**")  
                                .setColor("RANDOM")
                                .setFooter({text: "Lista Comandi RP"}) 
                                .setTimestamp()                        
                                i.reply({ embeds: [embed], ephemeral: true })

                                }
                            })
                    })

                }}     
            
