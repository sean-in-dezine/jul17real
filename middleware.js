

console.log("middleware".brightMagenta);
let loggerMW = (req, res, next) => {
  console.log(
      `\n.\n..`.magenta,
      `<~${req.method.magenta}~> request to ${
            req.url.magenta
          }  \nfrom ip ${req.ip.blue} \nfull: ${req.protocol.yellow}://${
            req.get("host").yellow
          }${req.originalUrl.yellow} \n${res.statusCode} ${
            res.statusMessage
          } \ncomplete: ${
            res.req.complete.toString().magenta
          } \nrequest body:${JSON.stringify(res.req.body)} `,
      `\n.`.magenta
    ); 
      }

// loggerMW = loggerMW.loggerMW
exports.request_logger = (req, res, next) => {
  if (req.method === undefined) {
    console.log("houston we have a problem");
  } else if (req.method !== undefined) {
    new Promise((resolve, reject) => {
      loggerMW(req, res, next);
    }).catch((err) => console.log(err));
  } else if (req.method !== undefined) {
  } else if (req.method === "POST") {
    let body = req.body;
    if (body !== undefined) {
      console.log(body);
    } else if (body === undefined) {
      console.log(`body is still ${body}`);

      console.log("~req.method undefined".red[reqlogger]);
    }
  }

  next();
};

// const logobj = () => {

//   a: req.url.magenta
//   b: req.headers.blue
//   ff: req.params.blue
//   f: req.method.magenta
// };

// const consolereqs = logobj();
// console.assert(consolereqs.a, consolereqs.b, consolereqs.f, consolereqs.ff);
