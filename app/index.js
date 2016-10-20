import 'whatwg-fetch';
// tool from github that actually allows fetch
// which is a browser specification
// add fetchs even if browser didn't have it

const family = [
  {
    first: 'Homer',
    age: 39,
  },
  {
    first: 'Marge',
    age: 36,
  },
  {
    first: 'Bart',
    age: 10,
  },
  {
    first: 'Lisa',
    age: 8,
  },
  {
    first: 'Maggie',
    age: 1,
  },

];

function printFirst(familyMember) {
  console.log(familyMember.first);
}

family.forEach(printFirst);
family.forEach((item) => {
  console.log('inline function argument:', item.first);
});

// Callback: sending functions to other functions

window.setTimeout(() => {
  console.log('I should run later');
}, 2000); // 2000 milliseconds or 2 seconds
// it may or may not run. we can fairly guess on it.

console.log('I will run later than that...');

// Events: what to do in response to our user


const form = document.querySelector('.contact');
const response = document.querySelector('.response');
const name = document.querySelector('input[name=name]');
const message = document.querySelector('textarea[name=message]');

// onClick is similar but
form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  response.innerText = `
    Hello: ${name.value},
    thank you for your thoughts that: ${message.value}.
  `;
});

// promises give us a guarantee that our Callbacks will run
// ... Under certain conditions

// class or constructor function
// its not tied up with any other function
// this is considered a CALLBACK
const later = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Timeout Promise');
    reject('there was something that went terribly wrong');
  }, 2000);
});
// CALLBACK

const after = document.createElement('h4');
document.body.appendChild(after);

later.then((information) => {
  after.innerText = information + ' Changed after promise resolved!!!';
}).catch((err) => {
  after.innerText = 'There was an error';
  console.log(err);
});

// Getting API data

fetch('https://randomuser.me/api')
  .then((result) => result.json())
  .then((data) => {
    const person = data.results[0];
    document.querySelector('.user__first-name').innerText = person.name.first;
  });
