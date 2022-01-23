const premiumSchema = require("../models/premium")
const {Client, Message, MessageEmbed, User} = require("discord.js")
const owner = ["860891414485270548"]


module.exports = {
    name: "remove-premium",
    aliases: ["r-p"],
    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */

    run: async(message, client, args) => {

        const member = message.mentions.members.first()






    
        const niemaszpermisjiPremium = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription('Nie posiadasz uprawnień `DEVELOPER_BOTA`!')
        //Eval Command(Not to be made public btw!)
        .setFooter(
          `${message.author.tag} (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        ) 

        const niepodalesusera = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription('Podaj użytkownika!')
        //Eval Command(Not to be made public btw!)
        .setFooter(
          `${message.author.tag} (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        ) 


        const tenuserniebyldodawany = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription('Ten użytkownik nie był wcześniej dodawany do bazy danych!')
        //Eval Command(Not to be made public btw!)
        .setFooter(
          `${message.author.tag} (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        ) 

        const embedrem = new MessageEmbed()
        .setTitle("<a:928375375074062357:929470622101287002> System premium!")
        .setDescription(`Usunięto ${member} z bazy danych!`)
        .setColor("GREEN")
        .setFooter(
          `${message.author.tag} (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        )
    
    
    
    
    
        if (message.author.id != owner) return message.channel.send(niemaszpermisjiPremium)

        if(!member) return message.channel.send(niepodalesusera)


        premiumSchema.findOne({
            User: member.id
            }, async(err, data) => {
                if(!data) return message.channel.send(tenuserniebyldodawany)


                data.delete()
                message.channel.send(embedrem)
        })

    }
}