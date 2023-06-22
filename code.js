const login = document.getElementById('login-container');
const success = document.getElementById('success-container');
const loginButton = document.getElementById('login-button');
const successButton = document.getElementById('success-button');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

//loginButton.click = showSuccess;
loginButton.addEventListener("click", showSuccess);
function showSuccess(event){
    emailValue = email.value;
    if(emailValue){
        console.log("emailValue");
        login.style.display = 'none';
        success.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
        email.classList.add('change-text','change-input','change-hover');
    };
    event.preventDefault();
}

//successButton.click = showLogin;
successButton.addEventListener("click", showLogin);
function showLogin(event){
    login.style.display = 'block';
    success.style.display = 'none';
    event.preventDefault();
}