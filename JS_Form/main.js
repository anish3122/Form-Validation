let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  number = id("number"),
  password = id("password"),
  password2 = id("password2"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    errorMsg[0].innerHTML = "Username is required";
    username.style.border = "2px solid red";

    // icons
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
  } else if(usernameValue.length < 5){
    errorMsg[0].innerHTML = "Username should have minimum 5 characters";
    username.style.border = "2px solid red";

    // icons
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
  }
  else {
    errorMsg[0].innerHTML = "";
    username.style.border = "2px solid green";

    // icons
    failureIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "1";
  }

    if(emailValue === "") {
        errorMsg[1].innerHTML = 'Email is required';
        email.style.border = "2px solid red";

    // icons
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "0";
    } else if (!isValidEmail(emailValue)) {
        errorMsg[1].innerHTML = 'Provide a valid email address';
        email.style.border = "2px solid red";

    // icons
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "0";
    } else {
        errorMsg[1].innerHTML = "";
        email.style.border = "2px solid green";

        // icons
        failureIcon[1].style.opacity = "0";
        successIcon[1].style.opacity = "1";
    }

    if(numberValue === '' || numberValue.length === 0){
        errorMsg[2].innerHTML = 'Phone Number is required';
        number.style.border = "2px solid red";

    // icons
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";

    } else if(numberValue.length > 10 || numberValue.length < 10){
        errorMsg[2].innerHTML = 'Provide a valid phone number';
        number.style.border = "2px solid red";

    // icons
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
    } else{
        errorMsg[2].innerHTML = "";
        number.style.border = "2px solid green";

        // icons
        failureIcon[2].style.opacity = "0";
        successIcon[2].style.opacity = "1";
    }

    if(passwordValue === '') {
        errorMsg[3].innerHTML = 'Password is required';
        password.style.border = "2px solid red";

    // icons
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "0";
        
    } else if(passwordValue === "password" || passwordValue === "Password"){
        errorMsg[3].innerHTML = 'Password cannot be password';
        password.style.border = "2px solid red";

    // icons
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "0";
    } else if(passwordValue === usernameValue){
        errorMsg[3].innerHTML = 'Password cannot be username value';
        password.style.border = "2px solid red";

    // icons
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "0";
    } else if (passwordValue.length < 8 ) {
        errorMsg[3].innerHTML = 'Password must be at least 8 character.';
        password.style.border = "2px solid red";

    // icons
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "0";
    } else {
        errorMsg[3].innerHTML = "";
        password.style.border = "2px solid green";

        // icons
        failureIcon[3].style.opacity = "0";
        successIcon[3].style.opacity = "1";
    }

    if(password2Value === '') {
        errorMsg[4].innerHTML = 'Please confirm your password';
        password2.style.border = "2px solid red";

    // icons
        failureIcon[4].style.opacity = "1";
        successIcon[4].style.opacity = "0";
        
    } else if (password2Value !== passwordValue) {
        errorMsg[4].innerHTML = "Passwords doesn't match";
        password2.style.border = "2px solid red";

    // icons
        failureIcon[4].style.opacity = "1";
        successIcon[4].style.opacity = "0";
    } else {
        errorMsg[4].innerHTML = "";
        password2.style.border = "2px solid green";

        // icons
        failureIcon[4].style.opacity = "0";
        successIcon[4].style.opacity = "1";
    }
});