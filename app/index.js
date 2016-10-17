import 'whatwg-fetch';

// practicing with "prototypes"

const duck = 'Dafty';
const bunny = 'Bugs Bunny';

console.log(duck.length);

console.log(duck.split(''));

// what if we didn't have "prototypes"

const h = {
  firstName: 'homer',
  lastName: 'Simpson',
  age: 39,
  ocupation: 'safety inspector',
};

const m = {
  firstName: 'marge',
  lastName: 'Simpson',
  age: 36,
  ocupation: 'currently unemployed',
};

function createCharacter(firstName, lastName, age, occupation) {
  return {
    firstName, lastName, age, occupation,

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const m2 = createCharacter('marge', 'Simpson', 36, 'currently unemployed');
const h2 = createCharacter('homer', 'Simpson', 39, 'safety inspector');

console.log(m2.getFullName);
console.log(m2.getFullName());
console.log(h2.getFullName);
console.log(h2.getFullName());

// the "new" keyword and constructor functions
// document is lower case
// string upper case
//
function Simpson(firstName, lastName, age, occupation) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.occupation = occupation;

// creates a unique implementation of the "getFullName"
// // function for each instance of Simpson
}

Simpson.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};// use this to refer to a current object


const m3 = new Simpson('marge', 'simpson', 36, 'currently unemployed');
const h3 = new Simpson('homer', 'simpson', 39, 'safety inspector');


console.log(m3);
console.log(typeof m3); // this still says object
console.log(m3 instanceof Simpson); // checks to see if m3 is ACTUALLY built based on the Simpson "constructor"
console.log(m3.getFullName);
console.log(m3.getFullName === h3.getFullName);
console.log(m3.toString);
//  'typeof' and 'instanceof'


import characters from './fringe';

// function Character(data) {
//   this.first = data.firstName;
//   this.last = data.lastName;
//   this.universe = data.universe;
//   this.age = data.age;
//   this.profession - data.profession;
// }

// Character.prototype.isTrustworthy = function () {
  // return this.universe === 1;
// };

class Character {
  constructor(data) {
    this.first = data.firstName;
    this.last = data.lastName;
    this.universe = data.universe;
    this.age = data.age;
    this.profession = data.profession;
  }

  isTrustworthy() {
    return this.universe === 1;
  }
}

Character.prototype.showName = 'Fringe';

const olive = new Character(characters[0]);
console.log(olive.showName);
console.log(olive.isTrustworthy());


for (let i = 0; i < characters.length; i++) {
  const c = new Character(characters[i]);

  console.log(c);
}

characters.forEach((item) => {
  const c = new Character(item);

  const el = document.createElement('div');
  el.classList.add('character');
  el.innerHTML = `
  <p class="character__name"></p>
  <p class="character__profession"></p>
  <p class="character__age"></p>`;

  el.querySelector('.character__name').innerText = `${c.first} ${c.last}`; 'Olivia Dunham';
  el.querySelector('.character__profession').innerText = c.profession;
  el.querySelector('.character__age').innerText = c.age;

  document.body.appendChild(el);

  console.log(c);
});
