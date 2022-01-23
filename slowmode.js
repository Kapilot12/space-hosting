const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "slowmode",
    description:
    "slowmode channel.",
    aliases: ["sw", "slow"],

    run(msg, args) {

        const wiadomocslownoargi = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription('Przykład: `slowmode 1`')

        const nopermssw = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription("Nie posiadasz permisji `ADMINISTRATOR`!")

        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(nopermssw)


      if(!args[0]) return msg.channel.send(wiadomocslownoargi)
      if(isNaN(args[0])) return msg.channel.send(wiadomocslownoargi)
      msg.channel.setRateLimitPerUser(args[0])

      let emslw = new MessageEmbed()
      .setTitle("<a:928375375074062357:929470622101287002> SlowMode!")
      .setDescription(`Tryb powolny kanału to **${args[0]}s**`)
      .setColor("GREEN")
      .setFooter(
        `${msg.author.tag} (${msg.author.id})`,
        msg.author.displayAvatarURL({ dynamic: true })
      )

      msg.channel.send(emslw);
        },
      } 