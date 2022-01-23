const {MessageEmbed} = require("discord.js")
const versja = "0.1"
const names = "SpaceBot"
const prx = "s? (nie można zmienić)"
const lang = "Polski"
const programming = "<:discordjs:930126448092659772> discord.js: 12.5.3\n<:nodejs:930123411345264680> node: 17.3.0"
const programs = "<:vsc:930123349764485190> VisualStudioCode"

module.exports = {
    name: "botinfo",
    aliases: ["bi"],
    premium: true,
    run(m) {

        const embens2 = new MessageEmbed()
        .setTitle("Informacje o bocie:")
        .addField("Wersja bota", versja)
        .addField("Nazwa", names)
        .addField("Prefix", prx)
        .addField("Główny język bota", lang)
        .addField("W czym pisany?", programming)
        .addField("Programy", programs)
        .setColor('GREEN')
        .setFooter(
            `${m.author.tag} (${m.author.id})`,
            m.author.displayAvatarURL({ dynamic: true })
          )
        m.channel.send(embens2)
    
    }
}