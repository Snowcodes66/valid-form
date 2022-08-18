'use strict'
const email=document.querySelector('.email')
const password=document.querySelector('.password')
const conPass=document.querySelector('.con-pass')
const btnSub=document.querySelector('.btn-sub')
const displaySignSms=document.querySelector('.dis-sign-sms')
const hidden=document.querySelector('.hidden')
const visible=document.querySelector('.visible')
const formDiv=document.querySelector('.form-div')
const user=document.querySelector('.name')
const username=document.querySelector('.username')
const errorDisplay=document.querySelectorAll('.error')
const inputControl=document.querySelector('.input-control')



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function errorSms(el,sms) {
    const inputControl=el.parentElement
    const displayError=inputControl.querySelector('.error')
    console.log(inputControl)

    displayError.innerText=sms
    inputControl.classList.add('error')
    inputControl.classList.remove('success')

    }

function success(el) {
    const inputControl=el.parentElement
    const displayError=inputControl.querySelector('.error')
    console.log(inputControl)

    displayError.innerText=''
    inputControl.classList.remove('error')
    inputControl.classList.add('success')
}

function validateForm() {
    if (user.value==='') {
        errorSms(user,'please fill in the provided space')
    }else{
        success(user)
    }
    if (password.value==='') {
        errorSms(password,'please fill in the provided space')
    }else if(password.value.length < 8){
        errorSms(password,'your password is too short')
    }
    
    else{
        success(password)
    }
    if (username.value==='') {
        errorSms(username,'please fill in the provided space')
    }else{
        success(username)
    }
    if (conPass.value==='') {
        errorSms(conPass,'please fill in the provided space')
    }else if(conPass.value!==password.value){
        errorSms(conPass,'your password is unmatched')
    }
    else{
        success(conPass)
    }

    if (email.value==='') {
        errorSms(email,'please fill in the provided space')
    }else if(!isValidEmail(email.value)){
        errorSms(email,'please provide a valid email')
    }
    else{
        success(email)
    }
    if (email.value!==''&& password.value!==''&& conPass.value!==''&& user.value!==''&& username.value!=='') {
        hidden.classList.remove('hidden')
        formDiv.classList.add('hidden')
    }
   
}



btnSub.addEventListener('click', function (e) {
    e.preventDefault()
    validateForm()
 
})

