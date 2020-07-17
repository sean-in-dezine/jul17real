const alpha = (req, res, next) => {
    let pank = '\n\t\t[./middleware/alpha]\n'.brightRed
    const dank = console.log(pank, `REQ METHOD: \t\t\t${req.method}`, pank)
    let foxtrot

    new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            dank
            foxtrot = 'GET'
            return foxtrot
        } else if (req.method === 'POST') {
            foxtrot = 'POST'
            dank
            return foxtrot
        } else {
            foxtrot = req.method
            dank
            return foxtrot
        }
    }).catch(err => console.log(err))
}

module.exports = alpha