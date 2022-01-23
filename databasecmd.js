const { MessageEmbed } = require("discord.js"); // PUT YOUR ID OR IT WON'T LET YOU EVAL...
//if you want more users to use this command then ["YOUR DISCORD ACCOUNT ID","ANOTHER ID", "ANOTHER"] And so On...
const owner = ["860891414485270548"]

module.exports = {
  name: "database",
  description: "Run A Whole Code With This Command!",
  aliases: ["data"],
  
  run: async(message, args, client, guild) => {


    const argumentsnulling32 = new MessageEmbed()
    .setColor('RED')
    .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
    .setDescription('Nie podałeś argumentów!')
    //Eval Command(Not to be made public btw!)
    .setFooter(
      `${message.author.tag} (${message.author.id})`,
      message.author.displayAvatarURL({ dynamic: true })
    )

    const nopermseval2 = new MessageEmbed()
    .setColor('RED')
    .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
    .setDescription('Nie posiadasz uprawnień `DEVELOPER_BOTA`!')
    //Eval Command(Not to be made public btw!)
    .setFooter(
      `${message.author.tag} (${message.author.id})`,
      message.author.displayAvatarURL({ dynamic: true })
    ) 


    if (message.author.id != owner) return message.channel.send(nopermseval2)
      try {
        const code1 = args.join(" ");
        if (!code1) {
           return message.channel.send(argumentsnulling32)
        }

          let embed1 = new MessageEmbed()
          .setTitle("<a:928375375074062357:929470622101287002> Baza danych!")
          .addField(":inbox_tray: Treść zapisana w Bazie Danych:", `\`\`\`${code1}\`\`\``)
          .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("GREEN")
          .setFooter(
            `${message.author.tag} (${message.author.id})`,
            message.author.displayAvatarURL({ dynamic: true })
          )

          let embed343 = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle("<a:928375375074062357:929470622101287002> Database!")
          .setDescription("Proszę czekać...")
         message.channel.send(embed343)
         
         .then((msg) => {
          setTimeout(function() {
          msg.edit(embed1);
        }, 2000)});  
 
         


      } catch (err) {

        const evalerror2 = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription(`\`\`\`\n${err}\`\`\``)
        //Eval Command(Not to be made public btw!)
        .setFooter(
          `${message.author.tag} (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        ) 
    

        
        message.channel.send(evalerror2);
    }
  }
}