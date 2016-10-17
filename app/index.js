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

//the "new" keyword and constructor functions
// document is lower case
// string upper case
//
functions Simpson(firstName, lastName, age, occupation) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.occupation = occupation;
}

//use this to refer to a current object

const m3 = new Simpson('marge', 'simpson', 36, 'currently unemployed');

debugger;
