import 'whatwg-fetch';

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
}, 2000);
// it may or may not run. we can fairly guess on it.

console.log('I will run later than that...');
