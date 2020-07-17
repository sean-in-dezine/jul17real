//! Loop Handler Reference 
//     @@add loops@@
//     @@remove loops@@
//     @@update loops@@
//     @owners	@pending	@current	@past
//     @@@@
//     @@@@
//     @@@@
//     @@@@
//     @@@@
//     @@@@
//
//
//
//
//



//::ref::addloops
exports.addLoops = (req,res,next) =>{
	let body = req.body.params

	//now it has to actually be added to the database... 
	//users need to be able to input information
	//shell script or something to automate this to mass populate
	//same with users
	//
	try {
	res.json({params_sent: body})
	} catch {
		console.log('error')
		res.json({someformof:"error occurred"})

	}

/*	
res.json({hi:"hi"})
*/

}

// ::ref::placeholder_user 
// ::ref::pending
// ::ref::display
//

exports.displayUser = (req,res,next)=>{

	try { 
let body = req.body.params
	res.json({test: 'success', params: body})

	} catch (error) {
	console.log(error)
		res.json({error: true})
	}

	
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
