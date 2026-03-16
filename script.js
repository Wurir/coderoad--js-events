const btnEl = document.querySelector('.contact-form__submit-button')

btnEl.addEventListener('click', function(e){
    e.preventDefault() // nie przeladowuje strony, zapobiega domyslnemu zachowaniu
})