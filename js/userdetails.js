const uId = getParam('id')

getData('https://jsonplaceholder.typicode.com/users/' + uId , function(data){
  renderUser(data)
})

function renderUser(data) {
  let out = ''
    out += `<div class="user mt-4">`
    out += `<h2 class="userName">${data.name}</h2>`
    out += `<h4 class="compName">${data.company.name}</h4>`
    out += `<p class="address">${data.address.city}, `
    out += `${data.address.street}, `
    out += `${data.address.suite}.`
    out += `</p>`
    out += `</div>`
  document.querySelector('#res').innerHTML = out
}