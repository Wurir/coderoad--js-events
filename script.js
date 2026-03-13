const h1El = document.querySelector('.input-checked')
const inputEl = document.querySelector('input')

inputEl.addEventListener('change', function(e){
    console.log(e.target.checked)
    h1El.innerText = e.target.checked
})