const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50, greeting = 'Hi', food = 'food') {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
        this.greeting = greeting;
        this.food = food;
    }
    greet(){
        console.log(`${this.greeting}, I'm ${this.name} the ${this.species}`);
    }
    feed(){
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}!`);
    }
}

class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger, 'Meow', 'fish');
        // this.greeting = 'Meow';
        // this.food = 'fish';
    }
    // greet(){
    //     console.log(`Meooowww, I'm ${this.name} the adorable ${this.species}!`)
    // }
    // feed(){
    //     this.hunger -= 20;
    //     console.log(`Yum, I love ${this.food}!`);
    // }
}
class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger, 'Woof', 'kibble');
        // this.greeting = 'Woof';
        // this.food = 'kibble';
    }
    // greet(){
    //     console.log(`Woof, I'm ${this.name} the ${this.species}!`)
    // }
    // feed(){
    //     this.hunger -= 20;
    //     console.log(`Yum, I love ${this.food}!`);
    // }
}

class AnimalShelter {
    constructor(){
        this.animals = [];
    }

    addAnimal(animal){
        this.animals.push(animal);
    }
    adopt(animal){
        const animalIndex = this.animals.indexOf(animal);
        this.animals.splice(animalIndex, 1);
    }
    getAnimalsBySpecies(species){
        return this.animals.filter(a => a.species === species);
    }
}

const shelter = new AnimalShelter();

for (const a of animalData){
    let animal;
    const hunger = a.hunger ? a.hunger : 50;
    const greeting = a.greeting ? a.greeting : 'Hi';
    const food = a.food ? a.food : 'food'
    if (a.species === 'dog'){
        animal = new Dog(a.name, a.color, hunger, greeting, food);
    } else if (a.species === 'cat'){
        animal = new Cat(a.name, a.color, hunger, greeting, food);
    } else {
        animal = new Animal(a.name, a.species, a.color, hunger, greeting, food);
    }
    shelter.addAnimal(animal)
}

for (const animal of shelter.animals) {
    animal.greet();
    animal.feed();
}