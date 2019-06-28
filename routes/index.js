const express = require('express');
const router  = express.Router();
const { findSports } = require('../controllers/sports.controller')
const { findTeams } = require('../controllers/teams.controller')
const { findPlayers } = require('../controllers/players.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Get sports page
router.get('/sports', findSports)

//Get teams page
router.get('/teams', findTeams)

//Get players page
router.get('/players', findPlayers)

module.exports = router;
