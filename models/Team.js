const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: String,
    //players debe ser una relación con referencia
    players: [{
      type: Schema.Types.ObjectId,
      ref: 'Player'
    }],
    league: String
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Team', teamSchema)