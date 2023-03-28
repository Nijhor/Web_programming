/*console.log('Hello world')
//this is a single line comment
/*multiline
comments
console.log("%cHello, World", "color: blue; font-size: 40px");
console.log("hello","there");
console.log("hello"+" here");*/
/*var person = "John";
console.log("hello",person);
var greet = "Hello";
console.log(greet,person);

var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
var catSound = "purr";
var dogSoung = "woof";
console.log(petDog,"says",dogSoung);
console.log(petCat,"says",catSound);
catSound = "meow";
console.log(petCat,"now says",catSound)*/
// power is written like this 10**2 10 power 2
// with triple === it checks the datatype also
/*var age =10;
if (age>=65){
    console.log("you get your income from pension");
}
else if (age<65 && age>=18){
    console.log("each Month you get a salary");
}
else if(age<18){
    console.log("you get an allowence");
}
else{
    console.log("The value of the age variable in not numerical");
}

var day = "Sunday";
switch(day){
    case 'Monday':
        console.log("Do Something");
        break;
    case 'Tuesday':
        console.log("Do Something");
        break;
    case 'Wednesday':
        console.log("Do Something");
        break;
    case 'Thursday':
        console.log("Do Something");
        break;
    case 'Friday':
        console.log("Do Something");
        break;
    case 'Saturday':
        console.log("Do Something");
        break;
    case 'Sunday':
        console.log("Do Something");
        break;
    default:
        console.log("There is no such day");
}*/

/*for(var i=5;i>=1;i--){
    console.log(i);
}
console.log("count complete");*/

/*var i=5;
while(i>0){
    console.log(i);
    i--;
}*/
//function

/*function addtownum(a,b){
    var c = a+b;
    console.log(c);
}
addtownum(10,20);*/

//storing data in arrays

//var train = ["Wheat","Rice","Flower","Curry"];
//console.log(train[0]);

/*function letterFinder(word,match){
    for(var i=0; i<word.length;i++){
        if(word[i]==match){
            console.log("Found the",match,'at',i);
        }
        else{
            console.log('No match found at',i);
        }
    }
}

letterFinder("test","t");*/

//create an object var user = {}; 
//creating an object with properties and their values
/*var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}*/

//console.log(Math.ceil(3.1647));

//Math.random method -- it generates decimal number in between 0 to 0.99

//var decimal = Math.random();
//console.log(decimal);

// to add two strings
/*var greet = 'Hello';
var user = 'Lisa';

console.log(greet ,user);
console.log(greet.concat(user) );*/

/*To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:  

The concat() method joins two strings:  

The indexOf returns the location of the first position that matches a character: 

The lastIndexOf finds the last match, otherwise it works the same as indexOf.

The split method chops up the string into an array of sub-strings:

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, " */


/*var clothes = [];
clothes.push('shirt','pant','payjama','punjabi','undy');

clothes.pop(-1);
clothes.push('panty');
console.log(clothes[2]);

var favCar = {};
favCar.color = 'pink';
favCar.covertible = true;

console.log(favCar);*/

/*var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}

car.turnKey();*/

//typeof() --> return the type of the input variable

/*var result = "Hello".indexOf('l');
console.log(result);

var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi"; //to add a property in object*/

//error handling....try catch block

/*try{
    console.log(c+d);
}catch(err){
    console.log("Nothing Happen");
}
console.log("Nothing Happen");


try{
    throw new Error();
}catch(err){
    console.log(err)
}
console.log("Nothing Happen");*/

/*function addTwoNums(a, b) {
    try {
        console.log(a + b);
    }catch(err){
        console.log(err);
    }
}

addTwoNums(5, '5');*/

/*function letterFinder(word, match) {
    var condition1 = typeof (word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else{
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder('cat','c')*/

/*var result = null;
console.log(result);

try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }


  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }

  throw new Error();
  console.log("Hello");*/

  try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }


  try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }