const mongoose = require('mongoose')

const Tranzakt = new mongoose.Schema({
    loopid: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    // for each status, set a date here 
    // example with string in array
    // rejected: {
    //     type: [String]
    // we put it in an array because if it were rejected more than once, we want record of all those dates.
    // }
})

module.exports = mongoose.model('Tranzakt', Tranzakt)