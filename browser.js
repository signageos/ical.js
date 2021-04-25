module.exports = require('./ical')

var rrule = require('./rrule')

// Copy rrule functions across to exports
for (var i in rrule){
	module.exports[i] = rrule[i]
  }
  