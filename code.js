const login = document.getElementById('login-container');
const success = document.getElementById('success-container');
const loginButton = document.getElementById('login-button');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const imageContainer = document.getElementById('image-container');

//loginButton.click = showSuccess;
loginButton.addEventListener("click", showSuccess);
email.addEventListener("mouseout", changeColor);

function showSuccess(event){
    if(!(email.value.indexOf("@") === -1)){
        login.style.display = 'none';
        success.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
        email.classList.add('change-placeholder', 'change-input');
        email.style.color = "hsl(4, 100%, 67%)";
        email.style.border = "solid 1px hsl(4, 100%, 67%)";
    };
    event.preventDefault();
}
function changeColor(){
    if(errorMessage.style.display = 'block'){
        errorMessage.style.display = 'none';    
        email.classList.remove('change-placeholder', 'change-input');
        email.style.color = "black";
        email.style.border = "solid 1px black"
    }
}

/*
const successButton = document.getElementById('success-button');
successButton.addEventListener("click", showLogin);
successButton.click = showLogin;
function showLogin(event){
    login.style.display = 'block';
    success.style.display = 'none';
    event.preventDefault();
}
*/