const {Client, Intents, MessageEmbed, Collection} = require("discord.js")
const mongoose = require("mongoose")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const cmdshandler = require("./handlers/handlercommand")
const mongoC = require("discord-mongo-currency")
const config = require("./config/config.json")
const eventsH = require("./handlers/events.h")


//cmds
cmdshandler(client)

//events
eventsH(client)



 
client.on("ready", () => {


    client.user.setPresence({
        activity: {

            name: "s?help",
            type: "LISTENING"

        }
    })

    
    mongoose.connect('mongodb+srv://Hxd:Kapiloteq@cluster0.iyjwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('\x1b[31m', "Connected to Database")
    })

mongoC.connect('mongodb+srv://Hxd:Kapiloteq@cluster0.iyjwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


})

client.login(config.token)