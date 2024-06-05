const divRegister = document.querySelector('.register')
const divLogin = document.querySelector('.login')
const btnRegister = document.querySelector('.goRegister')
const btnLogin = document.querySelector('.goLogin')

document.addEventListener('click', e => {
    if(e.target === btnRegister){
        divRegister.classList.add('active')
        divRegister.classList.remove('hidden')
        divLogin.classList.add('hidden')
        divLogin.classList.remove('active')
    }
    else if(e.target === btnLogin){
        divLogin.classList.add('active')
        divLogin.classList.remove('hidden')
        divRegister.classList.add('hidden')
        divRegister.classList.remove('active')
    }
})
