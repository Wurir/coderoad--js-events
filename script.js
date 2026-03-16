window.addEventListener('scroll', function(e){
    console.log(window.scrollY)

    const navbar = document.querySelector('.navbar')
    const square = document.querySelector('.square')
    const squarePosition = square.getBoundingClientRect()
    const squareBottom = squarePosition.bottom

    if(squareBottom < 0){
        navbar.innerText = 'square is above viewport'
    } else {
        navbar.innerText = ''
    }
})