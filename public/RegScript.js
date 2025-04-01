const button = document.getElementById('registration_button');
const span = document.getElementsByTagName('span');
const input = document.getElementsByTagName('input');
button.addEventListener('click',()=>{
    const name = document.querySelector('#register_name');
    const email = document.querySelector('#register_email');
    const number = document.querySelector('#register_number');
    const password = document.querySelector('#register_password');
    if (name.value==='' || email.value==='' || number.value==='' || password.value===''){
        if (name.value===''){
            document.getElementById('register_name').style.borderColor="red";
            document.getElementById('register_name_missing').style.visibility='visible';
            // name.addEventListener('click',()=>{
            //     document.getElementById(`register_name`).style.borderColor='white';
            //     document.getElementById(`register_name_missing`).style.visibility='hidden';
            // });
        }
        if (email.value===''){
            document.getElementById('register_email').style.borderColor="red";
            document.getElementById('register_email_missing').style.visibility='visible';
            // name.addEventListener('click',()=>{
            //     document.getElementById(`register_email`).style.borderColor='white';
            //     document.getElementById(`register_email_missing`).style.visibility='hidden';
            // });
        }
        if (number.value===''){
            document.getElementById('register_number').style.borderColor="red";
            document.getElementById('register_number_missing').style.visibility='visible';
            // name.addEventListener('click',()=>{
            //     document.getElementById(`register_number`).style.borderColor='white';
            //     document.getElementById(`register_number_missing`).style.visibility='hidden';
            // });
        }
        if (password.value===''){
            document.getElementById('register_password').style.borderColor="red";
            document.getElementById('register_password_missing').style.visibility='visible';
            // name.addEventListener('click',()=>{
            //     document.getElementById(`register_password`).style.borderColor='white';
            //     document.getElementById(`register_password_missing`).style.visibility='hidden';
            // });
        }
    }
    else{
        alert(`${name.value} you Succesfully Registered`);
        // window.location.href = './login.html';
        const nameValue = name.value;
        const emailValue = email.value;
        const numberValue = number.value;
        const passwordValue = password.value;
        console.log(name.value);
        console.log(email.value);
        console.log(number.value);
        console.log(email.value);
    }
})