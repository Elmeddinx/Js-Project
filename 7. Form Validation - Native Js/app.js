const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordch = document.querySelector('#passwordch');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   checkInputs(); 
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordchValue = passwordch.value.trim();

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, "Username Cannot be blank");
    } else{
        // add success class
        setSuccessFor(username);
    }
    if(emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, "Email Cannot be blank");
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid!");

    } else{
        // add success class
        setSuccessFor(email);
    }
    
    if(passwordValue === '') {
        // show error
        // add error class
        setErrorFor(password, "Password Cannot be blank");
    } else{
        // add success class
        setSuccessFor(password);
    }
    if(passwordchValue === '') {
        // show error
        // add error class
        setErrorFor(passwordch, "Check Password Cannot be blank");
    } else if (passwordValue !== passwordchValue) {
        setErrorFor(passwordch, "Password does not match");

    } else{
        // add success class
        setSuccessFor(passwordch);
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement; // .Form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error'
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
