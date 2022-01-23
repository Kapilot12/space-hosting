const mongoose = require("mongoose")

const rs = {
    type: String,
    required: true,
}


const profilShema = mongoose.Schema({
    guildId: rs,
    userId: rs,
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
    }
})

module.exports = mongoose.model("profiles", profilShema)