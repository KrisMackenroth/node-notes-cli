const fs = require('fs');
const json = require('./data.json');

if (process.argv[2] === 'read') {
  for (var x in json.notes) {
    console.log(`${x}: ${json.notes[x]}`);
  }
}
if (process.argv[2] === 'create') {
json.notes[json.nextId] = process.argv[3];
json.nextId++;
//json.notes[json.nextId] = JSON.stringify(process.argv[2], null, 2)
fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
  if (err) throw err;
})
}

if (process.argv[2] === 'delete') {
for (var x in json.notes) {
  if (x === process.argv[3])
}
}
