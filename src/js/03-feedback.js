import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ email: email.value, message: message.value })
  );
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

function getValueFromLocalStorage() {
  if (formData === null) {
    return;
  }
  email.value = formData.email;
  message.value = formData.message;
}

getValueFromLocalStorage();
