const mongoose = require("mongoose")
const log = console.log

const server = async () => {

    const conn = await mongoose
        .connect('mongodb://localhost:27017/db', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        .then(x => {

            let knx = x.connections
            let valz = knx.name
            // log(knx[0])
            // log(JSON.stringify({valz}, null, '\t'))
            // let zero = knx[0].name
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`.grey,`[init] `)
        })


    //  log('~mongoose connected'.gray, '[init]')

    // const db = mongoose.connection
    // db.on('error', console.error.bind(console, 'connection error: '))
    // db.once('open', function () {
    //     log('~DB connected'.grey, '[init]')
    // })

}

module.exports = server