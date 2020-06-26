//GET запрос
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
 .then(response => response.json())
 .then(data => show_users(data));


 function show_users(data) {
    // console.log(data);
    // return;

 	let out = '';
 	for(let item of data){
 		out += `<h1>${item.id} - ${item.name}</h1>`;
 		out += '<br>';
 	}
 	document.querySelector('body').innerHTML = out;
 }

 id
 name
 username
 email
 phone
 website
