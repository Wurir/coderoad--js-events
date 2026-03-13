const inputChecked = document.querySelector('.input-checked')
const inputEl = document.querySelector('input')
const selectValue = document.querySelector('.select-value')
const selectEl = document.querySelector('select')

inputChecked.innerText = inputEl.checked
selectValue.innerText = selectEl.value

inputEl.addEventListener('change', function(e){
    console.log(e.target.checked)
    inputChecked.innerText = e.target.checked
})

selectEl.addEventListener('change', function(e){
    selectValue.innerText = e.target.value
})