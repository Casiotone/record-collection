class RecordCollection {
    constructor() {
        this.allRecords = [];
    }

    addRecord(record) {
        if (typeof record !== 'object') {
            console.error('Invalid Record: Record must be of type object')
        }

        if (typeof record.name !== 'string' || typeof record.artist !== 'string') {
            console.error('Invalid Record: Name and artist must be of type string')
        }

        if (typeof record.year !== 'number') {
            console.error('Invalid Record: Year must be of type number')
        } else {
            this.allRecords.push(record);
        }

    }
    getAllRecords() {
        return this.allRecords;
    }

    addRecordCollection(array) {
        array.map(record => this.addRecord(record))
    }
}

module.exports = RecordCollection;
