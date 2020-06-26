//GET запрос
// const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//  .then(response => response.json())
//  .then(data => show_users(data));


//  function show_users(data) {
//  	let out = '';
//  	for(let item of data){
//  		out += `<h1>${item.id} - ${item.name}</h1>`;
//  		out += '<br>';
//  	}
//  	document.querySelector('body').innerHTML = out;
//  }


//POST запрос
let obj = {
	name: 'Ulan',
	email: 'admin@gmail.com'
}

const url = 'API/index.php';

fetch(url,{
   headers: {'Content-type': 'application/json'},
   method: 'POST',
   body:JSON.stringify(obj)
})
  .then(response => response.json())
  .then(data => console.log(data));

