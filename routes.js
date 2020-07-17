const express = require("express");
const router = express.Router();
const log = console.log;

console.log("router".brightMagenta);

// const {users, alpha} = require('./handlers')
let users = require("./handlers");
users = users.users;

// ?  .......................................................................................7/10/2020
// ?  ..................................................................................7/10/2020
// ?  .............................................................................7/10/2020
// ?  ........................................................................7/10/2020
// ?  ...................................................................7/10/2020
// ?  ..............................................................7/10/2020

const {
  loops,
  logrte,

  tranzakt,
} = require("./handlers");

// ?  ..............................................................7/10/2020
// ?  ...................................................................7/10/2020
// ?  ........................................................................7/10/2020
// ?  .............................................................................7/10/2020
// ?  ..................................................................................7/10/2020
// ?  .......................................................................................7/10/2020

const {
  login,
  logout
} = require("./handlers/login");
const {
  indexRoute
} = require("./handlers/login");

const {
  cashSearch
} = require("./handlers/search");

// !currently in production below
//* cashboard
router.route("/cash/money").get((req, res, next) => {
  res.sendFile(__dirname + "/public/cashboard.html");
});

router.route("/search").post(cashSearch);

router.route("/login").get(login).post(login);

// ? .......................................................................................7/10/2020
// ? ..................................................................................7/10/2020
// ? .............................................................................7/10/2020
// ? ........................................................................7/10/2020
// ? ...................................................................7/10/2020
// ? ..............................................................7/10/2020
// !all 7/10 routed handlers [BELOW] here
// ?[----------------------------]

// !-----------
// !----------------------
// !>
// *
// ?users / 1
router.route("/users").get(users).post(users);
// router.get('/users', searchUsers)
// *
// ?users / 1
// !^
// !----------------------
// !-----------

// !-----------
// !----------------------
// *
// ?loops / 2
// *
router.route("/loops").get(loops).post(loops);
// ?/loops / 1
// !^
// !----------------------
// !-----------

// !-----------
// !----------------------
// !>
// *
// ?log / 1

router.route("/log").get(logrte).post(logrte);

// ?/log / 2
// *
// !^
// !----------------------
// !-----------

// !-----------
// !----------------------
// !>
// *
// ?transfer / 1
// !build/connect the xfer model
router.route("/tranzakt").get(tranzakt).post(tranzakt);

// *
// ?/transfer / 2
// !^
// !----------------------
// !-----------

// !-----------
// !----------------------
// !>
// *
// ?whatever / 2
// *
// ?a / 1
// !^
// !----------------------
// !-----------

// !-----------
// !----------------------
// !>
// *
// ?whatever / 2
// *
// ?b / 1
// !^
// !----------------------
// !-----------

// ?[----------------------------]
// !all 7/10 routed handlers [ABOVE] here
// ? ..............................................................7/10/2020
// ? ...................................................................7/10/2020
// ? ........................................................................7/10/2020
// ? .............................................................................7/10/2020
// ? ..................................................................................7/10/2020
// ? .......................................................................................7/10/2020

const {
  register
} = require("./handlers");
// register = register.register
// !delete
// .post((req, res, next) => {
//   console.log(req.url, req.method);
//   console.log(req.originalUrl, req.method);
//   res.json({
//     success: "tr00",
//   });
// });

// !register
// !register
// !register
router
  .route("/register")
  .get((req, res, next) => {
    res.sendFile(__dirname + "/public/register/register.html");
  })
  .post(register);

router.route("/register/users").get(users).post(users);

// !register
// !register
// !register

// !7/8
router.route("/admin").post((req, res, next) => {
  res.json({
    USER: "ADMIN",
    login: "canigetawhatwhat",
  });
});
router.route("/hackerattempt").post((req, res, next) => {
  res.json({
    hackerattempt: "logged",
  });
});

router.route("/forms").post((req, res, next) => {
  res.json({
    forms: "request received, here is your res",
  });
});

router.route("/notes").post((req, res, next) => {
  let body = req.body.params;
  res.json({
    ahh: "my dear lad",
    yee_sent_me: "yarg",
    and_a_little_sumthin_extra: body,
  });
});

router.route("/card").post((req, res, next) => {
  res.json({
    thanks: "for the successful post to the card rt",
  });
});

router.route("/reports").post((req, res, next) => {
  res.json({
    reports: "accessed",
  });
});

// !currently in production above

// *

// !not currently in production below

const {
  isValidObjectId
} = require("mongoose");

const acceptAll = (req, res, next) => {
  res.json({
    all: "you've requested",
  });
};

// !admin > login as user {}
// !admin > view as user:

// !command in developer console

// !basically all of the routes are accessible to admins within the developer tools console

// ! these have to be sent with the admin route.


// !end of not currently in produciton

const {
  users_all
} = require("./handlers");
// ! 7/15 ::ref::715
router.route("/cash/clone").get((req, res, next) => {
  res.sendFile(__dirname + "/public/clone.html");
});

router
  .route("/users/all")
  // .get((req, res, next) => {
  //   res.json({
  //     success: 'true'
  //   })

  // })

  .get(users_all);

const {
  addUser
} = require('./handlers/UserHandler')

router
  .route("/users/add")
  .get((req, res, next) => {
    res.json({
      hola: "hoooola"
    });
  })
  .post(addUser);




//below this line is 7/16/2020
//::ref::selectuser
//
//
//
//


const {selectUser} = require('./handlers/UserHandler')
const {addLoops, displayUser} = require('./handlers/LoopHandler')
router
	.route('/users/panel/select')
	//.get()
	.post(selectUser)

//::ref::addloops
router
	.route('/loops/panel/add')
	.post(addLoops)


//::ref::display
//::ref::displays
//::ref::pending
router
.route('/loops/pending/user')
.post(displayUser)

module.exports = router;
