const { MessageEmbed } = require("discord.js"); // PUT YOUR ID OR IT WON'T LET YOU EVAL...
//if you want more users to use this command then ["YOUR DISCORD ACCOUNT ID","ANOTHER ID", "ANOTHER"] And so On...
const owner = ["860891414485270548"]

module.exports = {
  name: "aktualizacja",
  description: "Run A Whole Code With This Command!",
  aliases: ["a"],
  
  run(message, args, client, guild) {

    message.delete()


    const argumentsnulling322 = new MessageEmbed()
    .setColor('RED')
    .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
    .setDescription('Nie podałeś argumentów!')
    //Eval Command(Not to be made public btw!)
    .setFooter(
      `${message.author.tag} (${message.author.id})`,
      message.author.displayAvatarURL({ dynamic: true })
    )

    const nopermseval22 = new MessageEmbed()
    .setColor('RED')
    .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
    .setDescription('Nie posiadasz uprawnień `DEVELOPER_BOTA`!')
    //Eval Command(Not to be made public btw!)
    .setFooter(
      `${message.author.tag} (${message.author.id})`,
      message.author.displayAvatarURL({ dynamic: true })
    ) 




    if (message.author.id != owner) return message.channel.send(nopermseval22)
      
        const tresc = args.join(" ");
        if (!tresc) {
           return message.channel.send(argumentsnulling322)
        }

    
          let embed12 = new MessageEmbed()
          .setTitle("<a:928375375074062357:929470622101287002> Akutalizacja!")
          .setDescription(`\`\`\`${tresc}\`\`\``)
          .setColor("GREEN")
          .setFooter(
            `${message.author.tag} (${message.author.id})`,
            message.author.displayAvatarURL({ dynamic: true })
          )

          message.channel.send(embed12);
   

          

  }
}