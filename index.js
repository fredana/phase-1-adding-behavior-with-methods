class Cat{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
    speak(){
        return `${this.name} says meow!`
    }
}
const cat = new Cat("Sasha", "female")
cat.speak();

class Dog{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
    speak(){
        return `${this.name} says woof!`
    }
}
const dog = new Dog("Rufio", "male")
dog.speak();

class Bird{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
    speak() {
        if (this.gender === "male") {
          return `It's me! ${this.name}, the parrot!`;
        } else {
          return `${this.name} says squawk!`;
        }
      }
}
const bird = new Bird("Pablo", "male")
const bird2 = new Bird("Mable", "female")

