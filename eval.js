const { MessageEmbed } = require("discord.js"); // PUT YOUR ID OR IT WON'T LET YOU EVAL...
//if you want more users to use this command then ["YOUR DISCORD ACCOUNT ID","ANOTHER ID", "ANOTHER"] And so On...
const owner = ["860891414485270548"]

module.exports = {
  name: "eval",
  aliases: ["e"],
      /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
  
       run: async(message, args, client) => {

  



    


        const argumentsnulling2 = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription('Nie podałeś argumentów!')
        //Eval Command(Not to be made public btw!)
        .setFooter(
          `${message.author.tag} (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        )
    
        const nopermseval = new MessageEmbed()
        .setColor('RED')
        .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
        .setDescription('Nie posiadasz uprawnień `DEVELOPER_BOTA`!')
        //Eval Command(Not to be made public btw!)
        .setFooter(
          `${message.author.tag} (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        ) 
    
    
        if (message.author.id != owner) return message.channel.send(nopermseval)
          try {
            const code = args.join(" ");
            if (!code) {
               return message.channel.send(argumentsnulling2)
            }
            
            let evaled = eval(code);
    
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
    
              let embed = new MessageEmbed()
              .setTitle("<a:928375375074062357:929470622101287002> Eval!")
              .addField(":inbox_tray: Wejście", `\`\`\`${code}\`\`\``)
              .addField(":outbox_tray: Wyjście", `\`\`\`${evaled}\`\`\``)
              .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
              .setColor("GREEN")
              .setFooter(
                `${message.author.tag} (${message.author.id})`,
                message.author.displayAvatarURL({ dynamic: true })
              )
    
              let embed34 = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle("<a:928375375074062357:929470622101287002> Eval!")
              .setDescription("Proszę czekać...")
             message.channel.send(embed34)
             
             .then((msg) => {
              setTimeout(function() {
              msg.edit(embed);
            }, 3000)});  
     
             
    
    
          } catch (err) {
    
            const evalerror = new MessageEmbed()
            .setColor('RED')
            .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
            .setDescription(`\`\`\`\n${err}\`\`\``)
            //Eval Command(Not to be made public btw!)
            .setFooter(
              `${message.author.tag} (${message.author.id})`,
              message.author.displayAvatarURL({ dynamic: true })
            ) 
        
    
            
            message.channel.send(evalerror);
        }
       }
}