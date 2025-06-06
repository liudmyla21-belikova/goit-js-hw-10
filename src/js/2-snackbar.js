import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { delay, state } = event.target.elements;

  const delayValue = +delay.value;
  const stateValue = state.value;

  createPromise(stateValue, delayValue)
    .then(result => {
      iziToast.success({
        message: result,
        closeOnClick: true,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        message: error,
        closeOnClick: true,
        position: 'topRight',
      });
    });
}

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
