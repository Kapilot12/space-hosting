const {MessageEmbed} = require("discord.js")
  
  module.exports = {
    name: "clear",
    description: "Clear number of messages in specific channel.",
    aliases: ["c", "czysc", "wyczysc"],
  
    run(msg, args) {

        const { channel, guild, member } = msg

        const emerr = new MessageEmbed()
        .setColor("RED")
        .setTitle("<a:928375375006928906:929656859806289990> Błąd!")
        .setDescription("Nie masz permisji `MANAGE_MESSAGES`!")

        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return channel.send(emerr)

    

      const emerr2 = new MessageEmbed()
      .setColor("RED")
      .setTitle("<a:928375375006928906:929656859806289990> Błąd!")
      .setDescription("Poprawne użycie: `clear <1-100>`")

      const emerr3 = new MessageEmbed()
      .setColor("RED")
      .setTitle("<a:928375375006928906:929656859806289990> Błąd!")
      .setDescription("Liczba nie może być mniejsza niż `1`, ani wyższa niż `100`")


  
      const amountArg = parseInt(args[0])

      const empow = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("<a:928375375074062357:929470622101287002> Powodzenie!")
      .setDescription(`Usunięto ${amountArg} wiadomości!`)
  
      if (!Number.isInteger(amountArg)) {
        return channel.send(emerr2)
      }
  
      if (amountArg < 2 || amountArg >= 101) {
        return channel.send(emerr3)
      }
  
      channel.bulkDelete(amountArg)
      channel.send(empow)
    },
  }