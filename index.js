const fs = require('fs');

const json = require('./data.json');

if (process.argv[2] === 'read') {

  for (var i = 1; i < 5; i++) {
  console.log(JSON.stringify(json.notes[i], null, 2));
  }
}
