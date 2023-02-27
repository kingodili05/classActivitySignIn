let getForm = document.getElementById('reg');

// password

let getPassword = document.getElementById('password');
let getPasswordError = document.getElementById('passwordError');

// confirmPassword
let getConfirmPassword = document.getElementById('confirmPassword');
let getConfirmPasswordError = document.getElementById('confirmPasswordError');

// Error
const mssg = document.querySelector('.errorMsg');

// Success

const success = document.querySelector('.successMsg');


getForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if ((getPassword.value).length < 7) {
        getPasswordError.innerHTML = `<p style="color:red"> Your password must be greater than 7 characters </p>`;
        mssg.classList.add('error');
        mssg.innerHTML = '<h2> Please complete all fields </h2>';
        getPassword.value = '';
        getConfirmPassword.value = '';
    } else {
        if (getPassword.value != getConfirmPassword.value || getPassword.value === '' && getConfirmPassword === '') {
            mssg.classList.add('error');
            mssg.innerHTML = '<h2> Incorrect credentials,Try again </h2>';
        } else {
            mssg.innerHTML = '';
            mssg.classList.remove('error');
            success.classList.add('success');
            getForm.style.backgroundColor = 'purple';
            success.innerHTML = '<p> Logged in Successfully </p>';
            getPassword.value = '';
            getConfirmPassword.value = '';

        }
        getPasswordError.innerHTML = '';

    }
    setTimeout(() => {
        success.classList.remove('success');
        success.innerHTML = '';
        getForm.style.backgroundColor = '';
    }, 3000);

})