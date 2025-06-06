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
    .then(() => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delayValue}ms`,
        closeOnClick: true,
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        message: `❌ Rejected promise in ${delayValue}ms`,
        closeOnClick: true,
        position: 'topRight',
      });
    });
}

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
}
