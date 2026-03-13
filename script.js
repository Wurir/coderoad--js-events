const h1El = document.querySelector('h1')
const inputEl = document.querySelector('input')

inputEl.addEventListener('change', function(e){
    const input = e.target
    console.log(input.value)

    h1El.innerText = input.value
})