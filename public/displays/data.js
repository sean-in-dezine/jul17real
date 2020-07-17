// data.js in pubilc/displays/  .... 
//



// the reason for creating this is to 
//
// take the loop data from the back end
// create an array of all the loop
//


function getData() {

	let user = 'placeholder_user' 

	//::ref::placeholder_user
	//
	//fetch from loop {owner.pending[{user}] 	
	
	let params = {display: user}
	let h = new Headers()
	h.append('content-type','application/json')
	let url = window.location.href + '../../../loops/pending/user'
	params = JSON.stringify({params})
	let options = {method: 'POST', headers: h, body: params }
	
	let req = new Request(url, options)
	fetch(req).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))



}
getData()



