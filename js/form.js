const form = document.getElementById('form');

let correctAll = [];

let fullNameValue, messageValue, phoneNValue, emailValue = "";

form.addEventListener('submit', e => {
 e.preventDefault();

 let fullName = document.getElementById('fullName');          
 let email = document.getElementById('email');
 let phoneNN = document.getElementById('phoneNN');
 let message = document.getElementById('message');



 cheackInputs();
 if(correctAll.length === 4){

    const url = 'changeToPhpPage.php';
    const data = {
      email: emailValue,
      name: fullNameValue,
      phoneNN: phoneNValue,
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
                if(response === '1') {
                    swal("Hi", "The email has been successfully sent to our team", "success");
                    resetForm();
                }
            } else if (this.readyState === 4 && this.status !== 200) {
                let response = JSON.parse(xhr.responseText); 
                if(response === '33') {
                    swal("error", "A problem occurred", "error");
                }
            }
        }
    };
xhr.send(dataJSON);

 }else{
     correctAll = [];
 }

 
function resetForm() {
    fullName.value = "";
    email.value = "";
    phoneN.value = "";
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
    phoneNValue = phoneN.value;
    messageValue = message.value.trim();

    if(fullNameValue === ''){
        setError(fullName, 'מלא את הפרטים');
    }else{
        success(fullName);
    }

    if(emailValue === ''){
        setError(email, 'מלא את הפרטים');
    }else if(!isEmail(emailValue)){
        setError(email, 'כתובת אמייל שגויה');
    }else{
        success(email);
    }

    if(phoneNValue === ''){
        setError(phoneN, 'מלא את הפרטים');
    }else if(!phoneNValue.match(regex) || phoneNValue.length != 10){
        setError(phoneN, 'מספר פלאפון שגוי');
    }else{
        success(phoneN);
    }


    if(messageValue === ''){
        setError(message, 'מלא את הפרטים');
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


