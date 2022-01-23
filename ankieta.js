const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "poll",
    aliases: ["ankieta"],
    run(msg, args) {

        msg.delete()

        const pollus = args.join(" ")

        const argnulldiscord= new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription('Nie podałeś treści ankiety!')
        .setFooter(
            `${msg.author.tag} (${msg.author.id})`,
            msg.author.displayAvatarURL({ dynamic: true })
          )

        if(!pollus) {
            return msg.channel.send(argnulldiscord)
        }

        const ankietaEmbed = new MessageEmbed()
        .setTitle("📊 Ankieta!")
        .setColor('GREEN')
        .setDescription(`${pollus}`)
        msg.channel.send(ankietaEmbed)
        .then(m =>{
         m.react("<a:928375375074062357:929470622101287002>")
         m.react("<a:928375375006928906:929656859806289990>")
        })
    }
}