//Getting Node Element from the DOM

const formEle = document.querySelector('form');

const submitBtn = document.querySelector('.submit-btn');

let inputFirstName = formEle.querySelector('#firstname');

let inputLastName = formEle.querySelector('#lastname');

let inputEmailAddress = formEle.querySelector('#email');

let inputPassword = formEle.querySelector('#password');

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function inputFunc() {

submitBtn.addEventListener('click', ()=> {
  if (inputFirstName.value == null || inputFirstName.value == "") {
    formEle.classList.add('activefname');
    return false
  } else if (inputFirstName.value.length >= 4) {
    formEle.classList.remove('activefname');
    return true
  }
});

submitBtn.addEventListener('click', ()=> {
  if (inputLastName.value == null || inputLastName.value == "") {
      formEle.classList.add('activelname') ;
      return false;
    }  else if (inputLastName.value.length >= 4) {
      formEle.classList.remove('activelname');
      return true
  }
});

submitBtn.addEventListener('click', ()=> {
  if (inputEmailAddress.value == null || inputEmailAddress.value == "") {
      formEle.classList.add('activeemailadd');
      inputEmailAddress.placeholder ="email@example/com"
    } else if(inputEmailAddress.value.match(validRegex)) {
      formEle.classList.remove('activeemailadd');
      return true
    }
});

submitBtn.addEventListener('click', ()=> {
  if (inputPassword.value == null || inputPassword.value == "") {
      formEle.classList.add('activepword');
      return false;
    }  else if (inputPassword.value.length >= 4) {
    formEle.classList.remove('activepword')
    return true
  }
});
}

inputFunc();


