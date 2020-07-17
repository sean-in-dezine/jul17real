
const mongoose = require('mongoose')

const DateLogSchema = new mongoose.Schema({
    loopNumber: {
        type: [String],
        required: true
    },
    // for each status, set a date here 
    // example with string in array
    rejected: {
        type: [String]
        // we put it in an array because if it were rejected more than once, we want record of all those dates.
    }
})

module.exports = mongoose.model('DateLog', DateLogSchema)