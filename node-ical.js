var ical = require('./ical')
  , fs = require('fs')

exports.parseFile = function(filename){
  return ical.parseICS(fs.readFileSync(filename, 'utf8'))
}
