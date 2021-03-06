/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
print("Task 1a:");

let votingAge = 25;
if (votingAge > 18) {
    console.log(true);
}

newLine();
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
print("Task 1b:");

let firstVar = 9;
const secondVar = 4;

if (firstVar > secondVar) {
    firstVar--;
}
else {
    firstVar = secondVar;
}
print(firstVar);

newLine();
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
print("Task 1c:");

print(Number("1999"));

newLine();
//Task d: Write a function to multiply a*b 
print("Task 1d:");
/**
 * @returns the product of two numbers
 * @param {Number} a  First number
 * @param {Number} b  Second Number
 */
function multiply(a, b) {
    return a * b;
}

print(multiply(8, 2));

newLine();
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
print("Task 2:")

/**
 * @returns A human's age in dog years
 * @param {Number} humanAge 
 */
function dogYears(humanAge) {
    return humanAge * 7;
}

print(dogYears(27));

newLine();
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
print("Task 3: ")


function dogFeeder(weight, age) {
    if (age >= 1) {
        if (weight <= 5) {
            return weight * .05;
        }
        if (weight > 5 && weight <= 10) {
            return weight * .04;
        }
        if (weight > 10 && weight <= 15) {
            return weight * .03;
        }
        if (weight > 15) {
            return weight * .02;
        }
    }
    else {
        if (age <= 0.333) {
            return weight * .1;
        }
        if (age > 0.333 && age <= 0.583) {
            return weight * .05;
        }
        if (age > 0.583) {
            return weight * .04;
        }
    }
}

print(dogFeeder(15, 1));
print(dogFeeder(2, .583));
newLine();

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

print("Task 4: ")

function rockPaperSissors(yourWeaponOfChoice) {
    let yourChoice = 4;
    let options = ["rock", "paper", "sissors"]
    for (let i = 0; i <= options.length; i++) {
        if (options[i] === yourWeaponOfChoice.toLowerCase()) {
            yourChoice = i;
        }
    }
    const computersChoice = Math.floor(Math.random() * Math.floor(3));

    if (yourChoice == 4) {
        return "What game are you playing?";
    }

    if (computersChoice == yourChoice) {
        return "It's a draw";
    }

    if ((computersChoice == 0 && yourChoice == 2) ||
        (computersChoice == 1 && yourChoice == 0) ||
        (computersChoice == 2 && yourChoice == 1)){
            return "You lose. The computer played " + options[computersChoice] + ".";
        }
    
    else{
        return "You win. The computer played " + options[computersChoice] + ".";
    }
}

print(rockPaperSissors("rock"));
newLine();

/************************************************************** Task 5 **************************************************************/
//Metric Converter

//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
print("Task 5a: ")

function kilometersToMiles(kilometers){
    return kilometers * 0.621371;
}
print(kilometersToMiles(20));
newLine();

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
print("Task 5b: ")

function feetToCM(feet){
    return feet * 30.48;
}

print(feetToCM(5.6));

newLine();

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
print("Task 6:")
function annoyingSong(){
    let bottlesOfSoda = 99;
    while(bottlesOfSoda>0){
        print(bottlesOfSoda + " bottles of soda on the wall,") 
        print(bottlesOfSoda + " bottles of soda, take one down pass it around")
        bottlesOfSoda--;
        print(bottlesOfSoda + " bottles of soda on the wall")
        print("=================")
    }
}
annoyingSong();
newLine();

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

print("Task 7:")

function gradeCalc(numberGrade){
    if(numberGrade >= 90) {return "A"}
    if(numberGrade >= 80) {return "B"}
    if(numberGrade >= 70) {return "C"}
    if(numberGrade >= 60) {return "D"}
    else {return "F"}
}

print(gradeCalc(78))

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

print("Stretch 1: ")
function numberOfVowels(givenString){
    givenString = givenString.toLowerCase();
    let numberOfVowels = 0;
    let givenAsArray = givenString.split("");
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for(let i = 0; i <= givenAsArray.length-1; i++){
        for(let j = 0; j <= vowels.length-1; j++){
            if(givenAsArray[i] == vowels[j]){
                numberOfVowels++;
            }
        }
    }

    return numberOfVowels;
}

print(numberOfVowels("Cullen"));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object




/********************************************************** Quality of Life **********************************************************/

function newLine() {
    console.log("");
}

function print(toBePrinted) {
    console.log(toBePrinted);
}