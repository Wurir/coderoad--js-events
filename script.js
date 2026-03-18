const namesArr = ['Ala', 'Ola', 'Ela']
const task = [
    {
        isCompleted: true,
        text: 'Learn Events'
    }
]

localStorage.setItem('names', JSON.stringify(namesArr)) // zapisuje tablice w formie stringa
localStorage.setItem('name', 'Mateusz')
localStorage.setItem('number', 123)
localStorage.setItem('task', JSON.stringify(task))

const name = localStorage.getItem('name')
const number = Number(localStorage.getItem('number'))
const names = localStorage.getItem('names')
const tasks = localStorage.getItem('task')


console.log(name, number, names, tasks)
