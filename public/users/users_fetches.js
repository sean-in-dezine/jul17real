
let panel_user = document.getElementById('panel_user')
console.log('add real users here..')
console.trace('')
let list = ['default', 'sean', 'brad', 'dillon']
let panel = document.getElementById('panel')
panel_user.addEventListener('click', pickUser)
let panelcontainer = document.getElementById('panelbtn_container')

function populate(index) {
  let notice = document.createElement('h1')
  notice.textContent = 'Need to populate users from db'
  panelcontainer.appendChild(notice)
  notice.style.backgroundColor = 'lightgreen'
  console.trace(
    '\n here from \n\n pickUser(ev) > decideUser(select) > decideSubmit(ev) > populate(index) <<< \n \n begin console.trace :::: \n\n '
  )



  //below this line is 7/16/2020
  //::ref::selectuser
  console.log('test 777777')
  selectUser()
  console.log('afterr 77777')


  //above this line is 7/16/2020



}

function decideUser(select) {
  let decide = document.createElement('button')
  decide.id = 'decide'
  panelcontainer.appendChild(decide)
  decide = document.getElementById('decide')
  decide.textContent = 'DECIDE'
  decide.addEventListener('click', decideSubmit)
  panelcontainer.style.display = 'grid'
  panelcontainer.style.gridTemplateColumns = '1fr 1fr 1fr'
  select.style.width = '10vw'
  decide.style.width = '10vw'
  panel_user.style.width = '10vw'

  function decideSubmit(ev) {
    ev.preventDefault()


    let index = select.options.selectedIndex

    populate(index)
  }
}

function pickUser() {

  let users = document.createElement('select')
  users.id = 'select_users'
  panelcontainer.appendChild(users)
  let select = document.getElementById('select_users')
  let option

  let fetchResults = getAllUsers(select, option)
  //! ::ref::getAllUsers

  decideUser(select)
  // !! ::ref::decideUser 

}


//below this line 7/16/2020
//::ref::addloops

let addloops = document.getElementById('addloops')
addloops.addEventListener('click', addLoopsClicked)

function addLoopsClicked(ev) {
  ev.preventDefault()
  addLoops()
}




// !


let addusers = document.getElementById('addusers')
addusers.addEventListener('click', addUsers)
function addUsers() {
  // ::ref::addusers

  fetchAddUsers()



}





// !pick a user || PANEL || Outside of all cycles

function getAllUsers(select, option) {
  let h = new Headers();
  h.append("content-type", "application/json");
  let url = window.location.href + "../../../users/all";
  let options = {
    method: "GET",
    headers: h,
  };
  let req = new Request(url, options);
  fetch(req)
    .then((res) => res.json())
    .then((list) => {
      // ! get all users by name ::ref::getAllUsers
      /* console.trace(
        "\n::ref::getAllUsers \n\n here from \n\n pickuser() > getAllUsers(select, option) >  <<< \n \n begin console.trace: \n\n "
      ); */
      for (let user in list["result"]) {
        let y = list["result"];
        let x = y[user];
        let z = x.username;
        /* console.log(x, z); */
        option = document.createElement("option");
        option.text = z;
        select.add(option);
      }

      /* // console.log(list) */
      return list;
    })
    .catch((err) => console.error(err));
}

function fetchAddUsers() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  username = username.value;
  password = password.value;

  let params = {
    username,
    password,
  };
  params = JSON.stringify({
    params
  });

  /* console.log(params); */
  let h = new Headers();
  h.append("content-type", "application/json");
  let url = window.location.href + "../../../users/add";
  let options = {
    method: "POST",
    headers: h,
    body: params,
  };
  let req = new Request(url, options);
  fetch(req)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}



//below this line is 7/16/2020
//::ref::selectuser
//
function selectUser() {
  //named the same as backend, not the same as backend.
  //::ref::placeholder_user
  //console.trace('::ref::placeholder_user in ::ref::select_user')
  let user_selected = 'placeholder_user'
  let params = { user_selected: user_selected }
  let url = window.location.href + '../../../users/panel/select'
  let h = new Headers()
  h.append('content-type', 'application/json')
  params = JSON.stringify({ params })
  let options = { method: 'POST', headers: h, body: params }
  let req = new Request(url, options)

  fetch(req).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
}
