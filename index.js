const fs = require('fs');

const json = require('./data.json');

if (process.argv[2] === 'read') {

  for (var x in json.notes) {
    console.log(`${x}: ${json.notes[x]}`);
  }
}



const notes = process.argv[3];

if (process.argv[2] === 'create') {
fs.writeFile('data.json', JSON.stringify(notes, null, 2), err => {
  if (err) {
    console.error(err);
  }
});
}
