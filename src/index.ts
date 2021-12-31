const API_URL = 'https://icanhazdadjoke.com/';

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/users`)
  .then(response => response.json())
  .then(json => console.log(json))
  // .then(users => {
  //     const tpl = users.map(user => `<li>${user.name} - ${user.email}</li>`);
  //     HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
  // });