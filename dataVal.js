const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const retypePassword = document.getElementById('re-typePassword');

const nameRegEx = /^[A-Za-z]*$/
const emailVerification = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
const passwordVerification = /^[A-Za-z]*[0-9]*[\!*&$]*$/
const passwordVerificationNum = /[0-9]/
const passwordVerificationUpperCase = /[A-Z]/
const passwordVerificationSpecial = /[\!#$*@&]/
const passwordCheck = /password/i

form.addEventListener('submit', e => {
    e.preventDefault(); /* prevent the form from submitting */

    validateInputs(); /* to check the inputs */
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')

}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const validateInputs = () => {
    const firstNameInput = firstName.value.trim()
    const middleNameInput = middleName.value.trim()
    const lastNameInput = lastName.value.trim()
    const emailInput = email.value.trim()
    const passwordInput = password.value.trim()
    const retypePasswordInput = retypePassword.value.trim()

    const isExisting = nameRegEx.test(firstNameInput)
    const isEmailValid = emailVerification.test(emailInput)
    const isPasswordValidNumCheck = passwordVerificationNum.test(passwordInput)
    const isPasswordValidUpperCaseCheck = passwordVerificationUpperCase.test(passwordInput)
    const isPasswordValidSpecialCheck = passwordVerificationSpecial.test(passwordInput)
    const isPasswordValid = passwordCheck.test(passwordInput)


    // // console.log(firstNameInput, "First Name")

    if (firstNameInput === '') {
        setError(firstName, "name is required")
    } else if (!isExisting) {
        setError(firstName, "name cannot contain numbers or special characters")
    } else {
        setSuccess(firstName)
    }

    if (middleNameInput === '') {
        setError(middleName, "name is required")
    } else if (!isExisting) {
        setError(middleName, "name cannot contain numbers or special characters")
    } else {
        setSuccess(middleName)
    }

    if (lastNameInput === '') {
        setError(lastName, "name is required")
    } else if (!isExisting) {
        setError(lastName, "name cannot contain numbers or special characters")
    } else {
        setSuccess(lastName)
    }

    if (emailInput === '') {
        setError(email, "this field is required")
    } else if (!isEmailValid) {
        setError(email, "please input a valid email")
    } else {
        setSuccess(email)
    }

    if (passwordInput === "") {
        setError(password, "this field is required")
    } else if (passwordInput.length <= 7) {
        setError(password, "Password must be longer than 8 characters")
    }else if (isPasswordValid) {
        setError(password, `password cannot be ${passwordInput}`)
    }else if (!isPasswordValidNumCheck || !isPasswordValidSpecialCheck ) {
        setError(password, "Password must contain a number and special character")
    } else if (!isPasswordValidUpperCaseCheck) {
        setError(password, "Password must contain uppercase")
    }else {
        setSuccess(password)
    }
  
    console.log(passwordInput);

    if (retypePasswordInput === "") {
        setError(retypePassword, "this field is required")
    }else if (retypePasswordInput !== passwordInput) {
        setError(retypePassword, "password did not match")
    }else {
        setSuccess(retypePassword)
    }
    
}
// matching patterns inside string
// /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
// g- global
// ?- occurs 0 or 1 time colou?r =color / colour
// *- to occur 0 ar multiple times  color* =colo, color, colorrrr,
// + to occur 1 ar multiple times  color* = color, colorrrr,
// ()- to group your patterns
// \ to escape special chars


