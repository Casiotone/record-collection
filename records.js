

class RecordCollection {
    constructor() {
        this.allRecords = [];
    }

    addRecord(record) {
        this.allRecords.push(record);
    }

    getAllRecords() {
        return this.allRecords;
    }
}


