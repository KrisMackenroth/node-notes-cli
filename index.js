const fs = require('fs');
const json = require('./data.json');
if (process.argv[2] === 'read') {
  for (var x in json.notes) {
    console.log(JSON.stringify(json.notes[x], null, 2));
  }
}
json.notes[json.nextId] = JSON.stringify(5, null, 2)
console.log(json.notes[json.nextId]);
//json.notes[json.nextId] = JSON.stringify(process.argv[2], null, 2)
fs.writeFile('./data.json', JSON.stringify(json.notes, null, 2), err => {
  if (err) throw err;
})
