const { MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Wyświetl swój/innego użytkownika avatar!",

    run(message)  {

        const member = message.mentions.users.first() || message.author

        const avatar = member.displayAvatarURL({size: 1024})

        const avatarEmbed = new MessageEmbed()
        
        .setDescription(`[Kliknij](${message.author.displayAvatarURL()}) aby otworzyć zdjęcie w lepszej jakości!`)
        .setImage(avatar)
        .setColor("BLUE")
        .setFooter(
            `${message.author.tag} (${message.author.id})`,
            message.author.displayAvatarURL({ dynamic: true })
          )
        
        message.channel.send(avatarEmbed)
    }
}
