'use strict';

function clickResolve(resolve) {
  document.addEventListener('click', () => {
    resolve();
  });
}

function delayResolve(_, reject) {
  setTimeout(() => {
    reject();
  }, 5000);
}

const clickPromise = new Promise(clickResolve);
const delayPromise = new Promise(delayResolve);

// eslint-disable-next-line no-console
clickPromise.then(() => console.log('resolved'));
// eslint-disable-next-line no-console
delayPromise.catch(() => console.log('rejected'));
