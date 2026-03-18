localStorage.setItem('name', 'Mateusz')
localStorage.setItem('number', 123)

const name = localStorage.getItem('name')
const number = Number(localStorage.getItem('number'))
console.log(name, number)