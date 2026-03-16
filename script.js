const keydownHeader = document.querySelector('.keydown')
const keyupHeader = document.querySelector('.keyup')


window.addEventListener('keydown', function(e){
    keydownHeader.innerText = e.key
})

window.addEventListener('keyup', function(e){
    keyupHeader.innerText = e.key
})