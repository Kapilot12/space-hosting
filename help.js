const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["cmds", "pomoc"],

    run(mes) {
        const embeds1 = new MessageEmbed()
        .setColor('GREEN')
        .setTitle("<a:928375375074062357:929470622101287002> System pomocy SpaceBota:")
        .addField(":tools: ・ Developerskie", "`eval`, `database`, `aktualizacja`, `add-premium`, `remove-premium`")
        .addField(":cherry_blossom: ・ Praktyczne", "`botinfo`, `avatar`, `poll`, `linki`, `serverinfo`")
        .addField("🤣 ・ Zabawne", "`brak`")
        .addField("🤖 Bot", "`help`")
        .addField(":rotating_light: ・ Administracyjne", "`clear`, `slowmode`")
        .setFooter(
            `${mes.author.tag} (${mes.author.id})`,
            mes.author.displayAvatarURL({ dynamic: true })
          )
          
        mes.channel.send(embeds1)

    }
}