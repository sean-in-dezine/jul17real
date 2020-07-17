const mongoose = require('mongoose')

const Notification = new mongoose.Schema({
    date: {
        type: String,
        default: Date.now
    },
    type: {
        type: String,
        // tagged in transfer, change, status, comment (transfer takes highest priority if it contains multiple)
    },
    seen: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Notification', Notification)