const inputList = document.querySelectorAll('input')
const h1El = document.querySelector('h1')

let radioValue = null


function eventHandler(e){
    radioValue = e.target.value
    displayValueInHeader()
}

function displayValueInHeader(){
    h1El.innerText = radioValue
}

for(let i=0; i<inputList.length; i++){
    const input = inputList[i]

    if(input.checked){
        radioValue = input.value
        displayValueInHeader()
    }

    input.addEventListener('change', eventHandler)
}