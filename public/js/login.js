const signInBtn = document.querySelector('.signin-btn')
const signUpBtn = document.querySelector('.signup-btn')
const formBox = document.querySelector('.form-box')
const wrapperLogin = document.querySelector('.wrapper_login')

signUpBtn.addEventListener('click', () => {
    formBox.classList.add('active')
    wrapperLogin.classList.add('active')
})

signInBtn.addEventListener('click', () => {
    formBox.classList.remove('active')
    wrapperLogin.classList.remove('active')
})