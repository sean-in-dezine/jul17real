const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    phone: {
        type: String,
        required: [true, 'phone required for 2 factor authentication']
    },
    badge: {
        type: String,
        required: [true, 'badge number required for proof u work at SBEC buddy']
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
    // permissions: {

    // },
    // loops: {

    // },
    // guys: {

    // }
})

// module.exports = mongoose.model('User', userSchema)

// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Username is required']
//     },
//     password: {
//         type: String,
//         required: [true, 'Please add a password'],
//         minlength: 6,
//         select: false
//     },
//     phone: {
//         type: String,
//         required: [true, 'phone required for 2 factor authentication']
//     },
//     badge: {
//         type: String,
//         required: [true, 'badge number required for proof u work at SBEC buddy']
//     },
//     email: {
//         type: String,
//         required: [true, 'Email required'],
//         unique: true,
//         match: [
//             /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//             'Please add a valid email'
//         ]
//     },

//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
//     // permissions: {

//     // },
//     // loops: {

//     // },
//     // guys: {

//     // }
// })

module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose')

// const UsersSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         // required: true,
//         trim: true,
//         maxlength: 15,
//         // unique: true

//     },
//     firstname: {
//         type: String,
//         // required: true,
//         trim: true,
//         maxlength: 20
//     },
//     lastname: {
//         type: String,
//         // required: true,
//         maxlength: 25
//     },
//     permissions: {
//         type: String,
//         // required: true
//     },
//     email: {
//         type: String,
//         // match: [
//         //     // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//         //     'Please add a valid email'
//         // ],
//         // unique: true,
//         // required: true
//     },
//     phone: {
//         type: String,
//         maxlength: 20
//     },
//     position: {
//         type: String
//     },
//     dateJoined: {
//         type: Date
//     },
//     loginCount: {
//         type: Number
//     },
//     dominion: {
//         type: String
//     },
//     password: {
//         type: String,
//         // required: true
//     },
//     assignmentsIn: {
//         type: [String] //loops
//     },
//     assignmentsOut: {
//         type: [String] //loops
//     },
//     employing: {
//         type: [String] //other users
//     },
//     employedby: {
//         type: [String] //other users
//     }
// })

// module.exports = mongoose.model('Users', UsersSchema)