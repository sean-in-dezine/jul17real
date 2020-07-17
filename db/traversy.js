const mongoose = require("mongoose");
const server = require("./init");
let MONGO_URI =
  "mongodb+srv://sean:sean@cluster0-4i2zs.mongodb.net/supagangsta?retryWrites=true&w=majority";
const connectDB = async () => {
  async function connect() {
    console.log("connecting to mongodbatlas");
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold, "from [db/traversy.js] and db/[init.js]".green
    );
  }

  //   !if it can't connect to the first db, it'll connect tot he second one
  new Promise((resolve, reject) => {
    // throw new Error("yolo");
    connect();
  }).catch((err) => {
    new Promise((res, rej) => {
      console.log("mongodbatlas failed, connecting to local db name /db".red);
      server();
    }).catch((err) => console.log(err));
    return console.log("hola");
  });
};

module.exports = connectDB;