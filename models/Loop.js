const mongoose = require('mongoose')

const LoopsSchema = new mongoose.Schema({
    loopid: {
        type: String,
        required: true
    },
    system: {
        type: String,
        required: true
    },
    type: {
        type: String
        // is it compressor, motor, what
    },
    department: {
        type: String
        //who has dominion, frac2,3,commons,etc
    },
    dueDate: {
        type: Date
    },
    hydro: {
        type: Boolean
    },
    hydroStatus: {
        type: Boolean
        // done
        // not done
    },
    hydroRemaining: {
        type: Number
        // 4 test packs left, 3 2 1 0
        // default 0?
    },
    status: {
        type: String
    },
    testPackages: {
        type: [String]
    },
    dateLog: {
        type: [String]
    }
})

module.exports = mongoose.model('Loops', LoopsSchema)