// ?scroll waytf down for examples
const User = require("../models/User");

// !::ref::addusers


exports.addUser = (req, res, next) => {
    new Promise((resolve, reject) => {
        let body = req.body.params
        console.log(body)
        let username = body.username
        let password = body.password
        User.create({
            username: username,
            password: password
        }).then(response => res.json(response)).catch(err => console.log(err))
    }).catch(err => console.log(err))
}



//below this line is 7/16/2020
//::ref::selectuser
exports.selectUser = (req, res, next) => {

	try {
	let body = req.body.params
	body = body.user_selected
	
	res.json({ user_selected: body })
	} catch {
		console.log('error') 
		res.json({error: "this was an unsuccessful attempt", file: "UserHandler.js", function: "exports.selectUser", route: "/users/panel/select"})
	}


}









// exports.delUndefinedUsers = (req, res, next) => {
//     new Promise((resolve, reject) => {




//         User.create({
//                 username: username,
//                 password: password
//             }).then(response => {

//                 console.log(response)
//                 res.json({
//                     success: true,
//                     response: response
//                 })
//             })
//             .catch(err => console.log(`${err}`.red))


//     }).catch(err => console.log(err))
// }


































































































































































































































































































































































































































































































































































// !examples way the fuck below here



























































// ! or
// const user = new User({
//     username: "Sean",
//     password: "123strings"
// })
// user.save().then(function () {
//     console.log("user has been inserted")
// }).catchI(function () {
//     console.log('something bad happened')
// })
// ? end or


// ! or

// User.create({
//     username: "sean",
//     password: "password"
// }).then(res => res.json(res)).catch(err => console.log(err))

// ? end or
// ! or 
// exports.addUser = (req, res, next) => {
//     new Promise((resolve, reject) => {
// let body = req.body.params
// console.log(body)
// let username = body.username
// let password = body.password

//         console.log(username, password)

//         User.create({
//                 username: username,
//                 password: password
//             }).then(response => {

//                 console.log(response)
//                 res.json({
//                     success: true,
//                     response: response
//                 })
//             })
//             .catch(err => console.log(`${err}`.red))


//     }).catch(err => console.log(err))
// }




// ? end or
