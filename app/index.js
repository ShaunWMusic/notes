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
