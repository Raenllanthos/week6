// Basics of JavaScript

/* 
    Multiline Commen in JavaScript
    -- Variable Declarion in JavaScript -- 
    Primitive Types: strings, integers, floats, Boolean, arrays (lists), objects (dictionaries)
    Functions in JS
    Loops
*/

// String Variable
var firstName = "Zack"
console.log(firstName);

// Integer Variable
var someNumber = 32
console.log(someNumber);

// Float Variable
var someFloat = 3.14
console. log(someFloat);

// Array Variable
var someArray = [1,2,3,4]
console.log(someArray);

// Object variable
var someObject = {"test": "Please test me!"}
console.log(someObject);

// JavaScript Hoisting Example
console.log(someRandomVariable)
var someRandomVariable = 'This is a random string'
console.log(someRandomVariable)

// A better way of declaring a variable is by using "let" and/or "const"
// console.log(fullName) -- can't use variable with let before assignment
let fullName = firstName + " Taylor"
console.log(fullName)

const superHero = "The Hulk"
console.log(superHero)
// superHero = "Batman" -- Expect Error: cannot reassign const

/*
    Basic Math Operations in JS
*/

// Addition
let sum = 5 + 5
console.log(sum)

// Subtraction
let diff = 5 - 4
console.log(diff)

// Multiplication
let product = 5 * 5
console.log (product)

// Division
let divide = 6 / 3
console.log(divide)

// Exponential
let square = 5 ** 2
console.log(square)

// More Math Operations
// Finding Floor of a decimal
let findFloor = Math.floor(32.87)
console.log(findFloor)

// Find Ceiling of a decimal
let findCeiling = Math.ceil(32.01)
console.log(findCeiling)

// Mind Bender
let crazyStuff = someFloat + "4" // undefined, 7.14, 3.14+4, 3.144
console.log(crazyStuff)

// Mind Bender 2
let crazyStuff2 = someFloat + parseFloat("4") // undefined, 7.14, 3.14+4, 3.144
console.log(crazyStuff2)

// Redeclaration of variables
var redRanger = "Jason"
console.log(redRanger)
var redRanger = "Tommy"
console.log(redRanger)

// Using let keyword
let nbaGoat = "Michael Jordan"
console.log(nbaGoat)
nbaGoat = "Kobe"
console.log(nbaGoat)

/*
    Bad Redeclaration:
    let nbaGoat = "LeBron"
    console.log(nbaGoat)
*/

 /* 
    ==== JavaScript Functions ====
 */
//Regular name functions
function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2
}
console.log(addNums())

// Variable name function with parameters
let addNums2 = function(num,num2){
    return num + num2
}
console.log(addNums2(5,6))

function addNums3(x,y){
    return x+y
}
console.log(addNums3(6,7))

// ES6+ Arrow Function in JavaScript

/*
    Using a single parameter in an arrow functions WITHOUT ( )
    can only be done with only one parameter NOT if 2 or more parameters are introduced
*/
let cubed = num => {
    return num ** 3
}
console.log(cubed(4))

let cubed2 = (num) => {
    return num ** 3
}
console.log(cubed2(4))

// 2 parameters and arrow function
let toThePower = (num, power) => {
    return num ** power
}
console.log(toThePower(4,3))

// JavaScript Closure
// Self-Invoking Function
/* 
    We don't need to console.log,
    we'll use it to display our output
*/
console.log((function(name){
    let hello = "hello world from " + name;
    return hello
})("Cullen"))

// JavaScript Control Flow
// If Statment

function determineAge(age){
    if (age < 18){
        return "Minor"
    } else if (age >= 18 && age <= 65){
        return "Adult"
    } else {
        return "Senior"
    }
}
console.log(determineAge(7))
console.log(determineAge(45))
console.log(determineAge(69))

/// JavaScript Ternary Operator
function determineAge2(age){
    return (age < 18 ) ? "Minor2" : (age >= 18 && age <= 65) ? "Adult2" : "Senior2"
}

console.log(determineAge2(7))
console.log(determineAge2(45))
console.log(determineAge2(69))

/*  Loops in JavaScript  -- For Loop
    for Loop Syntax -- for keyword(counter; condition; in/decrement)
*/
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return "count has stopped"
}
console.log(countByOne())

function countOffOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return "count has stopped"
}
console.log(countOffOne())

// While Loop -- JavaScript
function countwhile(){
    let i = 0;
    let text = "";
    while(i<10){
        text += `This number is... ${i} \n`
        i++
    }
    return text
}
console.log(countwhile())

function countdowhile(){
    let i = 0;
    let text = "";
    do {
        text += `This number is... ${i} \n`
        i++
    }
    while(i > 10)
    return text
}
/* 
    Looping with Arrays and Array Methods
*/

let nameGroup = ["Terry", "Ben", "Ash", "Brock", "Misty"]
console.log(nameGroup)

let terry, ben, ash;
[terry,ben, ash] = nameGroup
console.log(terry,ben,ash)

//method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i< nameGroup.length; i++){
        console.log(nameGroup[i])
    }
    return "Done with list of names"
}
console.log(showAllNames())

// Method #2 for looping through an array
console.log(nameGroup.forEach(
    element => console.log(element)
))

// JavaScript Array Method: Array.toString()
console.log(nameGroup.toString())
console.log(typeof(nameGroup.toString()))

// JavaScript Array Methods: .map() . filter(), .reduce()
// map()
let bnames = nameGroup.map(i => {
    if (i[0] == "B"){
        return i
    } else{
        return false
    }
})
console.log(bnames)

// long .map()
let bnamestest = function (){
    let testarray = []
    for (let i = 0; i < nameGroup.length; i++){
        if(nameGroup[i][0] == "B"){
            testarray.push(nameGroup[i])
        }
    }
    return testarray
}
console.log(bnamestest())

// .filter()
let longnames = nameGroup.filter(element => element.length > 4)
console.log(longnames)

// .reduce()
const nums = [2,4,6,8,10]
let numsReduced = nums.reduce ((accumulator, currentnum) => {
    return accumulator + currentnum
})

console.log(numsReduced)

// Array Methods with String Values: .join(), .slice(), .search(), .splice()
console.log(nameGroup.join(", "))
console.log(nameGroup.slice(0,3))

let capvalue = nameGroup.splice(0,1, "Freddie")
console.log(`This was based on our splice: ${capvalue}`)
console.log(nameGroup)

function replacenames(){
    for(let i = 0; i < nameGroup.length; i++){
        if (i % 2 == 0){
            nameGroup.splice(i,1,"Vegeta is the prince of all saiyans")
        }
    } return nameGroup
}
console.log(replacenames())
console.log(nameGroup[0].search("prince"))
console.log(nameGroup[1].slice(0,nameGroup[1].length))