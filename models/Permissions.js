const mongoose = require('mongoose')

const PermissionsSchema = new mongoose.Schema({
    assignTo: {
        type: [String] //array of users we can assign folders to
    },
    level: {
        type: String // our current permissions level
    }, 
    requestOptions: {
        type: [String] //which users can we request folders from or request to assign to?
    }
})

module.exports = mongoose.model('Permissions', PermissionsSchema)