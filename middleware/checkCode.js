function checkCode(req, res, next) {
    console.log(`middleware/checkCode... checkCode called from ${req.method}: ${req.url} `.brightBlue, '[middleware/checkCode]'.brightRed)
    let code = req.body
    code = req.body.code
    return code
}

module.exports = checkCode