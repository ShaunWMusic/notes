export default class CharacterView(data) {
constructor(model) {
  //with this pattern always start with this.
  this.model = model;


  this.el = document.createElement('div');
  this.el.classList.add('character');
  this.el.innerHTML = `
  <p class="character__name"></p>
  <p class="character__profession"></p>
  <p class="character__age"></p>`;
}
//to fill in the element use a function called "render"
  render() {
//changed from a simple function.
  this.el.querySelector('.character__name').innerText = `${this.model.first} ${this.model.last}`; 'Olivia Dunham';
  this.el.querySelector('.character__profession').innerText = this.model.profession;
  this.el.querySelector('.character__age').innerText = this.model.age;
}
}


//using the "new" keyword takes constructor and runs
