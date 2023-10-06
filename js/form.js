const form = document.getElementById('form');
const resetForm = document.getElementById('resetForm');

let correctAll = [];

let fullNameValue = "";
let emailValue = "";
let phoneValue = "";
let messageValue = "";

form.addEventListener('submit', e => {
 e.preventDefault();

 const fullName = document.getElementById('fullName');          
 const email = document.getElementById('email');
 const phone = document.getElementById('phone');
 const message = document.getElementById('message');



 cheackInputs();
 if(correctAll.length === 4){

    const url = 'changeToPhpPage.php';
    const data = {
      email: emailValue,
      name: fullNameValue,
      phone: phoneValue,
      text: messageValue
    };
    const dataJSON = JSON.stringify(data);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          if(response == '1'){
            swal("Hi", "The email has been successfully sent to our team", "success");
            resetForm();
           }
       } else if (this.readyState == 4 && this.status != 200) {
        let response = JSON.parse(xhr.responseText); 
        if(response == '33'){
            swal("error", "A problem occured", "error");
        }
      }
    };
    };
xhr.send(dataJSON);

 }else{
     correctAll = [];
 }

 
function resetForm() {
    fullName.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";

    let formGroup = document.querySelectorAll('.formGroup');
    formGroup.forEach(input => {
        input.classList.remove('success');
    })
}
 
})

function cheackInputs(){

    var regex=/^[0-9]+$/;

    fullNameValue = fullName.value.trim();
    emailValue = email.value.trim();
    phoneValue = phone.value;
    messageValue = message.value.trim();


    if(fullNameValue === ''){
        setError(fullName, 'Fill this field');
    }else{
        success(fullName);
    }

    if(emailValue === ''){
        setError(email, 'Fill this field');
    }else if(!isEmail(emailValue)){
        setError(email, 'This email address is incorrect');
    }else{
        success(email);
    }

    if(phoneValue === ''){
        setError(phone, 'Fill this field');
    }else if(!phoneValue.match(regex) || phoneValue.length != 10){
        setError(phone, 'This phone number is incorrect');
    }else{
        success(phone);
    }


    if(messageValue === ''){
        setError(message, 'Fill this field');
    }else{
        success(message);
    };

}

function setError(input, text){
    const formGroup= input.parentElement;
    const small = formGroup.querySelector('small');
    formGroup.className = 'formGroup error';
    small.innerText = text;
}


function success(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'formGroup success';
    correctAll.push(input);
}

 
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


resetForm.addEventListener("click", (e) => {
        
    const fullName = document.getElementById('fullName');          
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    let formGroup = document.querySelectorAll('.formGroup');

    fullName.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";

    formGroup.forEach(input => {
        input.classList.remove('success');
        input.classList.remove('error');
    })

})