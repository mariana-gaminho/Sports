const mongoose = require("mongoose")
const Player = require('../models/Player')
const Team = require('../models/Team')
const Sport = require('../models/Sport')

const sports = [
  {
    name: 'Baseball',
    description: 'King of sports',
    ballSize: 'small',
    players: 9
  },
  {
    name: 'Futbol',
    description: 'Odiame mas',
    ballSize: 'medium',
    players: 22
  }
]

const teams = [
  {
    name: 'Red Sox',
    league: 'Major League'
  },
  {
    name: 'FC Barcelona',
    league: 'La Liga'
  }
]

const player = [
  {
    firstName: 'David',
    lastName: 'Ortiz',
    alias: 'Big Papi',
    age: 43
  },
  {
    firstName: 'Lionel',
    lastName: 'Messi',
    alias: 'La Pulga',
    age: 32
  }
]

mongoose.connect('mongodb://localhost/sports', {useNewUrlParser: true})

const createSports = Sport.create(sports)
const createTeams = Team.create(teams)
const createPlayers = Player.create(player)

Promise.all([createSports, createPlayers, createTeams])
.then(results => {
  console.log('Data created: ', results)
  mongoose.connection.close()
})
.catch(err => {
  console.log(err)
  mongoose.connection.close()
})

