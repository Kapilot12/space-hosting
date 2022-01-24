const { readdirSync } = require("fs")

const prefix = "s?"

const premiumSchema= require("../models/premium")

const { Collection, MessageEmbed } = require("discord.js")

const ascii = require("ascii-table")
const premium = require("../models/premium")

const table = new ascii().setHeading("Command", "Load status")

module.exports = (client) => {
  // Collections
  client.commands = new Collection()
  // Cooldowns Collection


  const commandFiles = readdirSync(__dirname + "/../cmds").filter((file) =>
    file.endsWith(".js"),
  )

  for (const file of commandFiles) {
    const command = require(__dirname + `/../cmds/${file}`)

    if (command.name) {
      client.commands.set(command.name, command)
      table.addRow(file, "✅")
    } else {
      table.addRow(file, "❌  -> missing 'name'!")
      continue
    }
  }

  console.log(table.toString())

  client.on("message", (msg) => {
    const { author, guild, channel } = msg

    // Check if user is a bot
    if (author.bot) {
      return
    }

    const komendapremium = new MessageEmbed()
    .setColor('RED')
    .setTitle('<a:928375375006928906:929656859806289990> Błąd!')
    .setDescription('Ta komenda jest dla użytkowników premium!')
    //Eval Command(Not to be made public btw!)
    .setFooter(
      `${msg.author.tag} (${msg.author.id})`,
      msg.author.displayAvatarURL({ dynamic: true })
    ) 

    // Ignore messages without prefix
    if (!msg.content.startsWith(prefix)) return

    const args = msg.content.slice(prefix.length).trim().split(/ +/g)

    const cmdName = args.shift().toLowerCase()

    const cmd =
      client.commands.get(cmdName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(cmdName),
      )

    // Check if commands exist
    if (!cmd) return

    if(cmd.premium && !(premiumSchema.findOne({ User: msg.author.id })))
    return msg.send(komendapremium)

    try {
      cmd.run(msg, args)
    } catch (error) {
      console.error(error)
      msg.reply("Konsola!")
    }
  })
}