const {MessageEmbed} = require("discord.js")
const link1 = "[Klik](https://discord.com/api/oauth2/authorize?client_id=905910474644815913&permissions=8&scope=bot)"
const link2 = "[Klik](https://discord.gg/c2KtEpu3wq)"

module.exports = {
    name: "linki",
    aliases: ["links"],

    run(message) {
        const em = new MessageEmbed()
        .setColor('BLUE')
        .setTitle('🔗 Linki')
        .addField("Link do dodania bota!", link1, false)
        .addField("Link na server support", link2, false)
        .setFooter(
            `${message.author.tag} (${message.author.id})`,
            message.author.displayAvatarURL({ dynamic: true })
          )

          message.channel.send(em)
    }
}