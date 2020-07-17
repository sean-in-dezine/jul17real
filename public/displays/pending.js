// pending js in ... public/displays/..
//
//
//


//::ref::pending
function populateRows() {

let tr_iter = 60000000 
let loopid_, status_, user_, date_ 


//::ref::pending_data

	loopid_ = 'loop1234'
	status_='created'
	user_='sean'
	date_='5/1/2020'

let data = {
		loopid_, status_, user_, date_
		}
let whatever = document.getElementById('rockbody')
	let displayStyle = (data) => {
	//dont forget to call this function		
	

		let y = document.createElement('tr')
		y.id = tr_iter
		whatever.appendChild(y) //fix this 
		

		for (b in data) {


		td = document.createElement('td')
		button = document.createElement('button')
		

			button.id=data[b]		
			//button.id=z.loopid
			//td.textContent(button)
			// and if that doesnt work
			y.appendChild(td)
			td.appendChild(button)
			button.textContent=button.id


		}
		
		loopid_ = document.getElementById(loopid_)
		status_ = document.getElementById(status_)
		user_ = document.getElementById(user_)
		date_ = document.getElementById(date_)
	}


	displayStyle(data)


}

populateRows()
