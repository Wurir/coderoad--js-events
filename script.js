const namesArr = ['Ala', 'Ola', 'Ela']
const task = [
    {
        isCompleted: true,
        text: 'Learn Events'
    }
]

const storage = sessionStorage

storage.setItem('names', JSON.stringify(namesArr)) // zapisuje tablice w formie stringa
storage.setItem('name', 'Mateusz')
storage.setItem('number', 123)
storage.setItem('task', JSON.stringify(task))

const name = storage.getItem('name')
const number = Number(storage.getItem('number'))
const names = JSON.parse(storage.getItem('names'))
const tasks = JSON.parse(storage.getItem('task'))


console.log(name, number, names, tasks)
