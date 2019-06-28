const Sport = require('../models/Sport')

exports.findSports = (res, res, next) => {
  Sport.find()
  .then(sports => res.render('sports/all', { sports }))
  .catch(err => res.redner('sports/all', err))
}