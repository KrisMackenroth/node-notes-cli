const fs = require('fs');

const json = require('./data.json');

if (process.argv[2] === 'read') {

  for (var x in json.notes) {
    console.log(JSON.stringify(json.notes[x], null, 2));
  }
}
//console.log(JSON.stringify(JSON.stringify(json.notes, null, 2)));
