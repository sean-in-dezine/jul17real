const current_file = './handlers.js'
const colors = require("colors");
const mongoose = require("mongoose");


// ?  .......................................................................................7/10/2020
// ?  ..................................................................................7/10/2020
// ?  .............................................................................7/10/2020
// ?  ........................................................................7/10/2020
// ?  ...................................................................7/10/2020
// ?  ..............................................................7/10/2020
//! 7/10/2020
const User = require("./models/recycled_models/users");

const Loop = require('./models/recycled_models/loops')

const LogModel = require('./models/recycled_models/log')

const Tranzakt = require('./models/Tranzakt')

let todo_handler_count = 0
let errstack = 0

function findTodo(todo_handler_count) {
    console.log('middleware begins here'.bgRed)
    todo_handler_count = todo_handler_count + 1, console.log('>>> <<< \nline__ 19, \t<<<<<<\t<<<<<<FIRST >>big time middleware validation here 322\n\t<<<<<<'.brightYellow.bgGray.bold)
    console.log('middleware ends here'.bgRed)
    //TODO:big time middleware validation here 322
}
findTodo(todo_handler_count)
console.log('handlers begin here'.underline.brightGreen)

// !build middleware session log [%sean322]
// * front end > backend. ... so like front end [ main fnality clicked > all inputs by section > userid > ip > > permissions any changes to those 3 things 

/* 
?let input = document.querySelector('input')
?input = 'button element'
?let section = {
?    input: [{
?        value: '1'
?    }, {
?        value: '2'
?    }]
?}
?let inputsarray = []
?section =
?    () => {
?        for (input in section) {
?            let val = input.value
?            inputsarray.push[{
?                input: val
?            }]
?        }
?    }

    */
// *imports in {section: {for (input in section) {let val = input.value

//! 7/10/2020




// ? .......................................................................................7/10/2020
// ? ..................................................................................7/10/2020
// ? .............................................................................7/10/2020
// ? ........................................................................7/10/2020
// ? ...................................................................7/10/2020
// ? ..............................................................7/10/2020

exports.handlers = (() => {
    console.log('handlers connected'.brightMagenta)
})

let request_logger = require('./middleware')
const {
    request
} = require('http')
request_logger = request_logger.request_logger


const alpha = require('./middleware/checkReqMethod')


exports.ADMIN = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {



            // ?[----------------------]
            // !admin code here
            // ?[----------------------]


            let userid = 'userid'
            res.json({
                admin: "logged in",
                user: userid
            })
        } else {
            res.json({
                sucess: false
            })
        }
    }).catch(err => console.log(err))
}


exports.login = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {

            // ?[----------------------]
            // !login code here
            // ?[----------------------]

            let userid = 'userid'
            res.json({
                status: "logged in",
                user: userid
            })
        } else if (req.method === 'POST') {
            res.json({
                post: "yup"
            })
        } else {
            res.json({
                success: false
            })
        }
    }).catch(err => console.log(err))
}







// exports.alpha = (req, res, next) => {

//     function whateverAlphaIs() {

//         new Promise((resolve, reject) => {
//             if (req.method === 'GET') {
//                 res.send('whoops, u mean 2 do that?')
//             } else if (req.method === 'POST') {
//                 request_logger(req, res, next)
//                 // your logic goes here
//                 // console.log('something')
//                 console.log('post stuff here')
//                 res.send('post')

//             } else {
//                 res.json({
//                     sucess: false
//                 })
//             }
//         }).catch(err => console.log(err))
//     }

//     if (req.method !== undefined) {

//         whateverAlphaIs()
//     } else {
//         res.json({
//             success: notsogood
//         })
//     }
// }

// @api
// ?this is probably some shit code
// !get to /register/users/
// @api



// ?  .......................................................................................7/10/2020
// ?  ..................................................................................7/10/2020
// ?  .............................................................................7/10/2020
// ?  ........................................................................7/10/2020
// ?  ...................................................................7/10/2020
// ?  ..............................................................7/10/2020


// !create user [block]
// *


function postmanTestWithUser(req, res, next) {
    let timestamp = new Date()

    console.log('1')
    const createUser = () => {
        console.log('2')
        const username = 'reas'
        const password = 'saluasdfd'
        console.log(username)
        let USER_TO_CREATE = {
            username,
            password
        }
        console.log('\n\n\t\t\t\tHERE'.brightGreen)
        console.log('\n\n\t\t\t\tHERE'.brightGreen)
        console.log(USER_TO_CREATE)
        console.log('\n\n\t\t\t\tHERE'.brightGreen)
        console.log('\n\n\t\t\t\tHERE'.brightGreen)

        return USER_TO_CREATE
    }
    let big_daddy_created_a_user = toCreateUser(createUser())
    big_daddy_created_a_user.then(mahalo => {
        // !should b gucci

        res.json({
            suxsz: "tr00",
            resultadositos: mahalo
        })
    }).catch(console.error)
}

function toCreateUser(USER_TO_CREATE) {
    USER_TO_CREATE = USER_TO_CREATE
    console.log(USER_TO_CREATE)
    try {
        let created_User = () =>
            User.create({
                // ?creating here
                // !

                // USER_TO_CREATE
                username: USER_TO_CREATE.username,
                password: USER_TO_CREATE.password,
                email: 'fuck you'

                // !
                // ?creating here

            }).then(createdUserResults => {
                const results = createdUserResults
                return results
            }).catch((err) => {
                let eco = "0011";
                let eroc = "ERRORCODE: \n";

                if (err.code === 11000) {
                    console.log("\n \t DUPLICATE MTHAFUCKA\t \n")
                }

                console.log(err.stack)
                console.log(`${eroc.brightBlue}`, eco.brightRed, `\n${err}`.red);
                JSON.parse(
                    JSON.stringify({
                        err,
                    },
                        null,
                        "\t"
                    )
                );
                res.json({
                    response: "failed",
                    errorcode: eco,
                });

            })

        created_User = created_User()
        return created_User
    } catch (error) {
        console.log(error)
    }
}

// *
// !^^^^^^^create user [block]



// ! update user [block]
// *


// *
// !/update user [block]



// ! create loop [block]
// *

function normalAddLoop(body) {
    let fnoffn = 'normalAddLoop(body)'
    console.log('running fn')
    console.log(body)

    const createLoop = () => {
        console.log('if u see this msg, that means still in default mode... not updating or adding new data %sean322')
        let loopid = '1234'
        let system = '5678'

        new Promise((resolve, reject) => {
            Loop.create({
                loopid: loopid,
                system: system
            }).then(ressies => {
                console.log('hi')
            }).catch(err => console.error(err.stack))
        }).catch(err => console.error(err.stack))
    }
    createLoop()

    let createdStatus = true
    let returnJson = {

        fnoffn: fnoffn,
        required_input: 'loopnumber, system',
        body: body,
        createdstatus: createdStatus
    }
    return returnJson

}
exports.loops = (req, res, next) => {
    let fnaxsd = 'exports.loops'

    if (req.method != undefined) {



        if (req.method === 'POST') {
            let body = req.body

            returnJson = normalAddLoop(body)

            res.json({
                returnJson,
                statuscode: res.statusCode,
                fnaxsd: fnaxsd,
            })


        } else if (req.method === 'GET')
            res.json({
                statuscode: res.statusCode,
                fnaxsd: fnaxsd,
                fnoffn: 'get Loop',
                required_input: 'loopnumber, system'
            })
    } else {
        res.json({
            reqmethod: req.method,
            successful: 'looks bad',
            fnaxsd: fnaxsd
        })
    }


}

// *
// ! /create loop [block]

// *
// ! log [block]

// !format data for logroot

let tdsean322 = 'sean __ test_data add in handlers_js _line '
// !logrte>filters
let userid = 'sean __ test_data add in handlers_js _line 325 ' //%sean322
let filter_loopid = ` ${tdsean322} 335`
let tag = ` ${tdsean322} 330`
let status = ` ${tdsean322} `
let owner = ` ${tdsean322} `
let pending = ` ${tdsean322} `
let current = ` ${tdsean322} 334`
let past = ` ${tdsean322} `
let io = ` ${tdsean322} `
let lifecycle = ` ${tdsean322} `
let system = ` ${tdsean322} `
let date = ` ${tdsean322} `
let testpack = ` ${tdsean322} `
let hydrostatus = ` ${tdsean322} `
let frac_unit = ` ${tdsean322} `
let type_of_loop = ` ${tdsean322} `
let transaction_transfer = ` ${tdsean322} `
// !logrte>attempt
let addto = ` ${tdsean322} 331`
let display = ` ${tdsean322} 332`


function getLogrte_Dt() {


    let logrte_dt = {
        default: 'recent',
        filters: {
            user: userid,
            loop: filter_loopid,
            transaction_transfer,
            type_of_loop,
            frac_unit,
            hydrostatus,
            testpack,
            date,
            system,
            lifecycle,
            io,
            past,
            current,
            pending,
            owner,
            status,
            tag,
        },
        attempt: {
            addto,
            display

        }
    }


    return logrte_dt
}

function getDefault(logrte_dt) {
    return logrte_dt.default
}

function addTo(logrte_dt) {
    return logrte_dt.attempt.addto
}
exports.logrte = (req, res, next) => {

    let logrte_dt = getLogrte_Dt()
    console.log(logrte_dt)

    if (req.method === 'POST') {


        console.log('error handling needed, all that shit, no req method checker nothing %sean322 exports.logrte')

        todo_handler_count = todo_handler_count + 1, console.log('>>> <<< \nline__ 383, \t<<<<<<\t<<<<<<this is in exports.logrte, just testing out my log object logrte object exports.logrte\n\t<<<<<<'.brightYellow.bgGray.bold)
        //TODO:this is in exports.logrte
        // !console.trace(by itself or something else) is alwasy an option

        // !setting temp params here >>>> 
        logrte_dt.changes = getDefault(logrte_dt)
        let new_logrte_dt = logrte_dt.changes
        todo_handler_count = todo_handler_count + 1, console.log('>>> <<< \nline__ 403, \t<<<<<<\t<<<<<<remove these temporary datas for logrte_dt getDefault(logrte_dt)\n\t<<<<<<'.brightYellow.bgGray.bold)
        //TODO:remove these temporary datas for logrte_dt getDefault(logrte_dt)


        logrte_dt.changes = addTo(logrte_dt)
        new_logrte_dt = logrte_dt.changes
        todo_handler_count = todo_handler_count + 1, console.log('>>> <<< \nline__ 413, \t<<<<<<\t<<<<<<add to logroot\n\t<<<<<<'.brightYellow.bgGray.bold)
        //TODO:add to logroot


        // ?get recent log... |POST|:
        if (new_logrte_dt === getDefault(logrte_dt)) {
            res.json({
                REQUEST: "get default LOG[recent, master]",
                RESPONSE: "sure",
                data: {
                    req_based_res: new_logrte_dt,
                    from_logrte_dt: logrte_dt.attempt,
                    from_logrte_full: logrte_dt
                }
            })

            // ?add to log
            // !add to the log |POST|
        } else if (new_logrte_dt === addTo(logrte_dt)) {
            console.log('...else if (new lowgrte dt === adto(logrte_dt)')

            //TODO: do the actual functions



            new Promise((resolve, reject) => {
                LogModel.create({
                    createdAt: LogModel.default
                }).then(ressies => {
                    console.log(ressies)
                    res.json({
                        SUXESS: 'tr00',
                        REQUEST: "get default LOG[recent, master]",
                        RESPONSE: "sure",
                        data: {
                            req_based_res: new_logrte_dt,
                            from_logrte_dt: logrte_dt.attempt,
                            from_logrte_full: logrte_dt
                        }
                    })
                }).catch(err => {
                    res.json({
                        no: 'good',
                        err: err.stack,
                        sean: 'sean322'
                    })
                    return console.error(err.stack)
                })
            }).catch(err => console.error(err.stack))

        }









    } else {


        res.json({
            testing: 'logrte',
            logrte_dt
        })
    }


}


// *
// ! /log loop [block]



// ?tranzakt
// ! transfer loop [block]
// *

exports.tranzakt = (req, res, next) => {

    if (req.method === 'POST') {

        let addTranzakt = () => {
            Tranzakt.create({
                loopid: '1234',
                date: Tranzakt.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            addTranzakt()
        } catch {
            errstack = errstack + 1, console.error(err.stack), console.log(`\nERRORSTACK>\n${errstack}\n<ERRORSTACK\n`) //%sean322
        }
    } else if (req.method === 'GET') {
        let getTranzakt = () => {
            Tranzakt.find({}, (err, result) => {
                if (!err) {
                    res.json({
                        result
                    })
                }
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        getTranzakt()
    }
}

// *
// ! /transfer loop [block]





exports.users = (req, res, next) => {
    new Promise((resolve, reject) => {

        if (req.method === 'GET') {
            if (res.statusCode === 200) {
                res.json({
                    success: "true"
                })
                let timestamp = new Date()
                console.log(`\n\tfunction: \n`.brightBlue + ` exports.users`.grey + ` \n\t\tin handlers.js `.white + '\nfind ALL users '.brightBlue + `\n\n${timestamp}\n`.brightMagenta)
                const getUsers = () => {
                    User.find({}, (err, result) => {
                        if (err) {
                            console.log(err)
                        } else {

                            console.log(result)
                            console.log(`\n\n${result}\n\n`)
                            console.log('hello')
                            // res.json(result)
                        }
                    })
                }
                getUsers()
                resolve()
            } else {

                // !check this... check all this shit
                console.log('\n\nhola, \nfrom exports.users under promise > -get- > else > right about reject() rn on line 140ish\n\n'.brightRed)
                reject()
            }
        } else if (req.method === 'POST') {

            // !time to create user...
            if (res.statusCode === 200) {
                console.log('oooooh boy')



                let params = res.req.body
                let body = params
                if (body !== undefined) {
                    body = params.body

                    // !get the user.... mongoose model find all that
                    //? console.log here %%log
                    // ?[----------------------]
                    // !getusers code here %sean22
                    // ?[----------------------]
                    console.log('fix this %sean22')

                    // 
                    try {
                        console.log(params.body.fetch)

                        res.json({
                            welcome: "kiddoze"
                        })
                    } catch (error) {
                        console.log('\n this error is thrown when you try and access params.body.fetch but it\'s undefined, \n meaning theres a good chance were tryna make a post req without going thru the website... this happens for instance when i use postman')
                        console.log(error)
                        postmanTestWithUser(req, res, next)
                        resolve()


                    }
                }
            }

        } else {
            //  %sean
            // !might throw an error here, editied this 7/10 check original fresh-html\ testing\ env/ and it's under exports.users in handler.js 
            console.log('!might throw an error here, editied this 7/10 check original fresh-html\ testing\ env/ and it\'s under exports.users in handler.js // %sean '.brightBlue)
            console.log(res.statusCode)
            res.json({
                sucess: false
            })
            reject()
        }
    }).catch(err => {
        let sendingstuff = 5

        return console.log(err)
    }).catch(err => console.log(err))
}









// ? .......................................................................................7/10/2020
// ? ..................................................................................7/10/2020
// ? .............................................................................7/10/2020
// ? ........................................................................7/10/2020
// ? ...................................................................7/10/2020
// ? ..............................................................7/10/2020




const checkCode = require('./middleware/checkCode')
const badReqMethod = require('./utils/badreqmethod')
exports.register = (req, res, next) => {

    console.log(alpha(req, res, next))

    function registerOrRaiseHellTrying() {
        new Promise((rez, rejz) => {
            if (req.method !== undefined) {
                new Promise((resolve, reject) => {
                    if (req.method === 'POST') {
                        console.log('registering')
                        // ?[----------------------]
                        // !registration code here
                        // ?[----------------------]

                        res.json({
                            itsabeautifyllld: "mornin aw yeah"
                        })
                        resolve()
                    } else {
                        console.log('code don\'t match'.brightRed)
                        badReqMethod(req, res, next)
                        throw new Error('method not post', req.method)
                    }
                }).catch(err => {
                    badReqMethod(req, res, next)
                    return console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
            badReqMethod(req, res, next)
        })

    }
    let code = checkCode(req, res, next)
    if (code === 'register/give-em-hell') {
        console.log('code matches, handlers.js>register>post'.brightGreen, `${current_file}`.brightRed)
        registerOrRaiseHellTrying()
    }
}




// ! 7/15 ::ref::715
exports.users_all = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {


            let getUsers = () => {
                User.find({}, (err, result) => {
                    if (!err) {
                        res.json({
                            result
                        })
                    }
                }).catch(err => {
                    res.json({
                        no: 'good',
                        err: err.stack,
                        sean: 'sean322'
                    })
                    return console.error(err.stack)
                })
            }
            getUsers()

        } else {
            res.json({
                sucess: false
            })
        }
    }).catch(err => console.log(err))
}