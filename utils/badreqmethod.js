function badReqMethod(req, res, next) {
    //? console.log here %%log
    console.log('utils/badreqmethod.js > badReqMethod() > res.json (/util, global)'.brightGreen, '[utils/badreqmethod]'.brightRed)
    res.json({
        something: "Fishy",
        something: "bad",
        shouldntbe: "accessed"
    })
 
}

module.exports = badReqMethod