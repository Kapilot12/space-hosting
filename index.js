const {Client, Intents, MessageEmbed, Collection} = require("discord.js")
const mongoose = require("mongoose")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const cmdshandler = require("./handlers/handlercommand")
const mongoC = require("discord-mongo-currency")


//cmds
cmdshandler(client)



 
client.on("ready", () => {

    console.log("Gotowy!")

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
        console.log("Connected to Database")
    })

mongoC.connect('mongodb+srv://Hxd:Kapiloteq@cluster0.iyjwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


})

client.login("OTA1OTEwNDc0NjQ0ODE1OTEz.YYQ84A.xk5cTqFbQi946JzUgFQpshCsF8Y")