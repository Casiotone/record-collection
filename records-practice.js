const RecordCollection = require('./records');
const myRecords = new RecordCollection()

myRecords.getAllRecords()

myRecords.addRecord({
            name: 'The Dark Side of the Moon',
            artist: 'Pink Floyd',
            year: 1973
        })

myRecords.getAllRecords()

const arrayOfRecords = [
    {
        name: 'Harmar Superstar',
        artist: 'Harmar Superstar',
        year: 2000
    }
    {
        name: 'Homing Calls',
        artist: 'Hamilton Yarns'
        year: 2002
    }
    {
        name: 'Friend',
        artist: 'Rozi Plain',
        year: 2013
    }
]

console.log(myRecords.addRecordCollection(arrayOfRecords))


