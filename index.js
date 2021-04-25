module.exports = require('./ical')

var node = require('./node-ical')
var rrule = require('./rrule')

// Copy node functions across to exports
for (var i in node){
  module.exports[i] = node[i]
}
// Copy rrule functions across to exports
for (var i in rrule){
  module.exports[i] = rrule[i]
}
