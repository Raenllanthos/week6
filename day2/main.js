// Continue with yesterday's Control Flow
// The Switch case statement

let day = new Date().getDay();
let literal_day = new Date().toString();
console.log(day)
console.log(literal_day)

// Switch Case Statement Syntax
switch(day){
    case 0: console.log("Sunday"); break;
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    default: console.log("Fucker")
}

//Liter Day Example with Switch Case Syntax
switch(literal_day.split(" ")[0]){
    case "Sun": console.log("Sunday"); break;
    case "Mon": console.log("Monday"); break;
    case "Tue": console.log("Tuesday"); break;
    case "Wed": console.log("Wednesday"); break;
    case "Thu": console.log("Thursday"); break;
    case "Fri": console.log("Friday"); break;
    case "Sat": console.log("Saturday"); break;
    default: console.log("Fucker")
}

// -- Creation of Objects in JavaScript
// -- Simple JavaScript Objects

let person = {
    name : "John",
    age : "28",
    fav_color : "Red"
}
console.log(person)
// Acessing the data in our object
console.log(person["name"]) // Bracket Notation
console.log(person.name) // Dot Notation
// -- Complex JavaScript Object
let person2 = {
    name : "Fizz",
    age : 8,
    languages : ["JavaScript", "Python", "C++", "Java"],
    fav_color : "Blue",
    teams: [{
        baseball: ["Chicago White Sox", "Chicago Cubs"],
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"]
        },
        {
            baseball: "Redsox",
            football: "Browns",
            basketball: "Phoenix Suns",
            soccer: ["Manchester United", "Barcelona", "Bayern Munich"]      
        }
    ]
}
console.log(person2); console.log(person2.languages); console.log(person2.languages[2])
console.log(person2.teams[0].basketball[0]); console.log(person2.teams[1].soccer[1])

// -- Javascript Obkect Prototype Methods -- Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))
// console.log(Object.entries(person2))

// Bad/Sad Path of looping through Objects in JavaScript
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
}
// Happy Path of lopping through Objects in JavaScript -- Looking for Keys
for(let i = 0; i < Object.keys(person2).length; i ++){
    console.log(Object.keys(person2)[i])
}
// Loop Over Key, Value Pairs in JavaScript Object
for(let i = 0; i < Object.entries(person2).length; i ++){
    console.log(Object.keys(person2)[i], Object.values(person2)[i])
}
// List Values from the person2 Object that are arrays
for(let i = 0; i < Object.keys(person2).length; i ++){
    if(Array.isArray(Object.values(person2)[i]))
    console.log(Object.values(person2)[i])
}
// Create our own Object Prototypes -- with ES5 Method Syntax
function Car(make,model,year){
    this.make = make
    this.model = model
    this.year = year

    // A method inside of a JS Prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}
        and has ${wheels} wheels and is the ${color} color.`)
        return "Returned Value"
    }
}
// Creation of an instance of a prototype
let my_car = new Car("Nissan", "350Z", "2008")

// Call our prototype method
console.log(my_car.printInfo(7, "Gunmetal"))

// Creation of JavaScript Class 
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`
    }
}
// Creating an instance of Human Class
let wilma = new Human("Wilma", 27, "Female")
console.log(wilma.printInfo())
class Baby extends Human{
    constructor(name,age,gender,walking){
        super(name,age,gender)
        this.walking = walking
    }
    isBabyWalking() {
        if (this.walking == true){
            return "walks"
        } else return "cannot walk"
    }
}
let jonnie = new Baby("Jonnie", 1, "Male", false)
console.log(jonnie.printInfo())
console.log(jonnie.isBabyWalking())

// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

*/
let countup = (function(){
    let counter = 0; // This will be our PRIVATE variable
    console.log("Hit")
    return function() { return counter ++}
}) ()

let addNames = ( function () {
    let names = [];
    console.log("Adding Names")
    return function (name){
        console.log(names)
        return names.push(name)
    }
}) ()

// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/
function first(){
    console.log(1)
}
function second(){
    console.log(2)
}
// first()
// second()
function firstdelay(){
    setTimeout(function(){
        console.log(1)
    },5000)
}
function seconddelay(){
    console.log(2)
}
// firstdelay()
// seconddelay()
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`)
    callback()
}
doHomework("JavaScript", function() {
    console.log("Done with homework")
})

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// We solve this above problem with Promises

/*
    ======= Creating a JS Promise =====
*/
const isEvenNumber = (num) => {
    return new Promise ((resolve,reject) => {
        if(num % 2 == 0){
            resolve(num)
        } else {
            reject(num)
        }
    })
}
isEvenNumber(10)
.then( (result) =>{
    console.log(`${result} is an EVEN number!`)
})
.catch( (error) =>{
    console.log(`${error} is an ODD number!`)
})
isEvenNumber(13)
.then( (result) =>{
    console.log(`${result} is an EVEN number!`)
})
.catch( (error) =>{
    console.log(`${error} is an ODD number!`)
})
function increasesalary(base, increase){
    const newsalary = base + increase;
    console.log(`New Salary: ${new_salary}`)
    return newsalary
}
// function to add to base salary slowly
function slowaddition(n1,n2){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(n1 + n2), 2000)
    })
}
function increaseslowsalary(base, increase){
    const newsalary = slowaddition(base,increase);
    console.log(`New Salary: ${newsalary}`)
    return newsalary
};
async function aysncincreaseslowsalary(base, increase){
    const newsalary = await slowaddition(base,increase);
    console.log(`New Salary: ${newsalary}`)
    return newsalary
};