//Loops Fetch in ........dfa/jul15/public/loops/.....
//
//
//
//
//

//::ref::addloops
function addLoops() {

	//named the same as backend, not the same as backend.
	//console.trace('::ref::placeholder_user in ::ref::select_user')
	let loopid = 'loop1234'
	let pending='none'
	let current='admin'
	let past = current
	let status_='created'
	let date_= new Date()

	let params = {
	loopid:loopid, owner:{pending:pending, current: current, past: past}, status: status_, date: date_
	}
	let url = window.location.href + '../../../loops/panel/add'
	let h = new Headers()
	h.append('content-type', 'application/json')
	params = JSON.stringify({params})
	let options = {method: 'POST', headers: h, body: params}
	let req = new Request(url, options)

	fetch(req).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
}




