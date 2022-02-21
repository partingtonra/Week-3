console.log("Week 3 Coding Assignment");

//problem 1a and 1b.
var ages = [ 3, 9, 23, 64, 2, 8, 28, 93, 111];

var firstNumber = ages[0];
var lastNumber = ages[ages.length - 1];
console.log(lastNumber - firstNumber);


//Wanted to try push method also to add an element to the array and verify the functionality, which did work.
/*ages.push(111);
console.log(ages);
var lastNumber = ages[ages.length - 1];
console.log(lastNumber - firstNumber);*/

//problem 1c.
var sum = 0;
for (i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
    //sum += ages[i]; alternative shorter code//
}
console.log(sum / ages.length);
//below is alternative coding to output context of the value
//console.log(`the average value is: ${sum / ages.length}`);


// Problem 2 Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// P2a Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.


let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sumNameLengths = 0;
for (i = 0; i < names.length; i++) {
    sumNameLengths += names[i].length;
    
}
console.log(sumNameLengths / names.length);

// P2b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let allNames = "";
for (i = 0; i < names.length; i++) {
    //allNames += names[i] + " "
    allNames = allNames + " " + names[i];
}
console.log(allNames);

//console.log(allNames.trim()); to avoid that leading space.
//trim function removes any leading or trailing white space.
//console.log(names.join(" ")); alternative method to avoid using a for loop/convenience function.

//Problem 5
/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array*/

var nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths);
//This problem is nearly identical to the example in the Intermediate Array Video

//Problem 6
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let total = nameLengths.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
});
console.log(total);
//initially wrote this as let sum, but had already declared sum in earlier code.

//Problem 7
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordRepeat( word, n ){
    let string = "";
    for (i = 0; i < n; i++){
        string += word;
    } 
    return string;
}
let newString = wordRepeat("DOG", 5);
console.log(newString);

//Problem 8
//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function createFullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(createFullName("Eleanor" , "Roosevelt"));


//Problem 9
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan(numbers){
    let sum = numbers.reduce(function(accumulator,currentValue){
        return accumulator + currentValue;
    });
    if (sum > 100){
        return true;
    }
    else {
        return false;   
    } 
}
console.log(isSumGreaterThan(ages));

//Problem 10
//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageOfNumbers(numArray){
    let sum = 0;
    numArray.forEach(function(element) {
        sum += element;
    });
    return sum / numArray.length;
}
console.log(averageOfNumbers(ages));

//Problem 11
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isAverageGreaterThan(firstParameter, secondParameter){
    let averageFirst = averageOfNumbers(firstParameter);
    let averageSecond = averageOfNumbers(secondParameter);
    if (averageFirst > averageSecond) 
        return true;
    return false;
    //return averageFirst > averageSecond ? true : false;
    //return averageFirst > averageSecond
    //lines 128-130, 131, 132 are equivalent/do the same thing.
}
let isGreater = isAverageGreaterThan(nameLengths, ages);
console.log(isGreater);

console.log(isAverageGreaterThan(ages, nameLengths));
console.log(isAverageGreaterThan(ages, ages));


//Problem 12
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    return (isHotOutside && moneyInPocket > 10.50);
}
console.log("willBuyDrink: " + willBuyDrink(true, 10.51));
console.log(willBuyDrink(false, 10.51));
console.log(willBuyDrink(true, 10.50));
console.log(willBuyDrink(false, 10.50));

//Problem 13
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/*This function returns the lowest value found in the number 
array passed to this function.*/ 

function returnLeast(numArray){
    let lowest = numArray[0];
    numArray.forEach(function(element){
        if (element < lowest)
            lowest = element;
    });
    return lowest;
}
console.log(returnLeast(ages));
