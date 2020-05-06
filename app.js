// meal maker object
const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
	},

  get appetizers()
    {return this._courses.appetizers},
  set appetizers(appetizers)
    {this._courses.appetizers = appetizers},

  get mains()
    {return this._courses.mains},
  set mains(mains)
    {this._courses.mains = mains},

  get desserts()
    {return this._courses.desserts},
  set desserts(desserts)
    {this._courses.desserts = desserts},

  get courses()
    {return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
      };  
    },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price : dishPrice
     };
    return this._courses[courseName].push(dish);
  },

	getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
  	const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`;
  }   
};

// test add dish to course
menu.addDishToCourse('appetizers', 'Caesar Salad', 12);
menu.addDishToCourse('appetizers', 'Bruschetta', 8);

menu.addDishToCourse('mains', 'Spaghetti', 18);
menu.addDishToCourse('mains', 'Filet Mignon', 27);

menu.addDishToCourse('desserts', 'Tiramisu', 10);
menu.addDishToCourse('desserts', 'Panna Cotta', 10);

let meal = menu.generateRandomMeal();
console.log(meal);

// test setter function
menu.appetizers = [ { name: 'Pickles', price: 4 }, { name: 'Fries', price: 8 } ]

meal = menu.generateRandomMeal();
console.log(meal)
