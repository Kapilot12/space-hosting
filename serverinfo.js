const {Message, Client, MessageEmbed} = require("discord.js")

module.exports = {
    name: "serverinfo",
    aliases: ["server-info", "serwer", "si"],
    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
    run(message, client, args) {
        const embedServer = new MessageEmbed()
        .setTitle(`Informacje o serwerze ${message.guild.name}:`)
        .addField("Nazwa", `${message.guild.name}`, false)
        .addField("ID", `${message.guild.id}`, false)
        .addField("Właściciel", `${message.guild.owner}`, false)
        .addField("ID Właściciela", `${message.guild.ownerID}`, false)
        .addField("Region", `${message.guild.region}`, false)
        .addField("Liczba użytkowników", `${message.guild.memberCount}`, false)
        .addField("Poziom weryfikacji", `${message.guild.verificationLevel}`, false)
        .setColor("GREEN")
        message.channel.send(embedServer)
    }
}