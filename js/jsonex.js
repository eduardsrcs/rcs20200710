getData('https://jsonplaceholder.typicode.com/users', function(data){
  renderUsers(data)
})

function renderUsers(data) {
  let out = ''
  data.forEach(element => {
    out += `<div class="users"><a href="userdetails.html?id=${element.id}">${element.name}</a><br>`
    out += `<span class="comName">${element.company.name}</span>`
    out += `</div>`
  });
  document.querySelector('#res').innerHTML = out
}