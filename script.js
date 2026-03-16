const contactForm = document.querySelector('.contact-form')
const inputEl = document.querySelector('.contact-form__input')

function onSubmit(e){
    e.preventDefault()
    const value = inputEl.value
    console.log(value);
}

contactForm.addEventListener('submit', onSubmit)