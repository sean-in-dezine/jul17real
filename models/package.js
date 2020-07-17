const mongoose = require('mongoose')

const PackageSchema = new mongoose.Schema(
    {
        loopsAssociated: {
            type: [String]
        }
    }
)

module.exports = mongoose.model('Package', PackageSchema)