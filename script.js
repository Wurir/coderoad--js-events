const h1El = document.querySelector('h1')
const inputEl = document.querySelector('input')

inputEl.addEventListener('input', function(e){
    const input = e.target
    console.log(input.value)
})