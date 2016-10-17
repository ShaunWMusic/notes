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
