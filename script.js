window.addEventListener('scroll', function(e){
    console.log(window.scrollY)

    const square = document.querySelector('.square')
    const squarePosition = square.getBoundingClientRect()
    console.log(squarePosition)
})