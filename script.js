const div1 = document.querySelector('.div-1')
const div2 = document.querySelector('.div-2')
const div3 = document.querySelector('.div-3')

div1.addEventListener('click', function(e){
    console.log('div-1 red');
})

div2.addEventListener('click', function(e){
    e.stopPropagation()
    console.log('div-2 yellow');
})

div3.addEventListener('click', function(e){
    console.log('div-3 blue');
})