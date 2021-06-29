//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
console.log("START HOMEWORK 1")
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for(let i = 0; i < Object.entries(person3).length; i++){
    console.log(Object.keys(person3)[i], Object.values(person3)[i])
}
console.log("END HOMEWORK 1\n ")

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Use an arrow to create the printInfo method
    printInfo = () => {
    console.log(`I am ${this.name}, I am ${this.age} years old!`)
    this.increaseAge();
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    increaseAge = (age) => {
        return this.age += 1;
    };
    increaseAge2 = (age) => {
        return this.age += 3;
    };
    printInfo2 = () => {
        console.log(`I am ${this.name}, I am ${this.age} years old!`)
        this.increaseAge2();
        }
}
console.log("START HOMEWORK 2")
ben = new Person("Peter", 50)
ben.printInfo()
ben.printInfo()
jerry = new Person("Jerry", 4)
jerry.printInfo2()
jerry.printInfo2()
console.log("END HOMEWORK 2\n ")

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

console.log("START HOMEWORK 3")
const isBigWord = (word) => {
    return new Promise((resolve, reject) =>{
        if (word.length >= 10){
            resolve("Wow!... that's a big string...")
        } else{
            reject("Don't worry about it, It's all in the motion of the ocean ;)")
        }
    })
}
isBigWord("Spanish Inquisition")
.then((result) =>{
    console.log(`${result}`)
})
.catch((error) =>{
    console.log(`${error}`)
})

isBigWord("Small")
.then((result) =>{
    console.log(`${result}`)
})
.catch((error) =>{
    console.log(`${error}`)
})
console.log("END HOMEWORK 3")