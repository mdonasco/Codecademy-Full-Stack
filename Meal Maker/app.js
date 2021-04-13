const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mainIn) {
      this._courses.mains = mainIn;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessertIn) {
      this._courses.desserts = dessertIn;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const idx = Math.floor(Math.random() * dishes.length);
      return dishes[idx];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const price = appetizer.price + main.price + desserts.price;
  
      return `Your meal today is: ${appetizer.name}, ${main.name}, ${desserts.name} for a total price of ${price}! Bone apple teeth!`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'spinach dip', 5);
  menu.addDishToCourse('appetizers', 'wings', 15);
  menu.addDishToCourse('appetizers', 'pretzels', 10);
  
  menu.addDishToCourse('mains', 'steak', 50);
  menu.addDishToCourse('mains', 'salad', 15);
  menu.addDishToCourse('mains', 'fish', 25);
  
  menu.addDishToCourse('desserts', 'ice cream', 10);
  menu.addDishToCourse('desserts', 'mochi', 15);
  menu.addDishToCourse('desserts', 'cake', 10);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);