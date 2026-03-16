const contactForm = document.querySelector('.contact-form')
const inputEl = document.querySelector('.contact-form__input')

contactForm.addEventListener('submit', function(e){
    e.preventDefault() // nie przeladowuje strony, zapobiega domyslnemu zachowaniu
    const value = inputEl.value
    console.log(value);
    
})