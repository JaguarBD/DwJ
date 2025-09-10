const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const ConfirmPassword = document.getElementById('ConfirmPassword')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs()
{
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const ConfirmPasswordValue = ConfirmPassword.value;

    if (usernameValue === '')
    {
        setErrorFor(username, 'o nome de usuário é obrigatório')
    }else{
        setErrorFor(username)
    }
}

function setErrorFor(input, message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input)
{
    const formControl = input.parentElement

    formControl.className = 'form-control success'
}

function checkEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}
