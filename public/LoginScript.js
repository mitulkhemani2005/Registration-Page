const button = document.getElementById('login_button');
button.addEventListener('click',()=>{

    const email = document.querySelector('#login_email');
    const password = document.querySelector('#login_password');
    if (email.value==='' ||password.value===''){
        if (email.value===''){
            document.getElementById('login_email').style.borderColor="red";
            document.getElementById('login_email_missing').style.visibility='visible';
        }
        if (password.value===''){
            document.getElementById('login_password').style.borderColor="red";
            document.getElementById('login_password_missing').style.visibility='visible';
        }
    }
    else{
        alert(`you Succesfully logginned`);
        // window.location.href = './';
        const emailValue = email.value;
        const passwordValue = password.value;
        console.log(email.value);
        console.log(password.value);
    }
})