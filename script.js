
// the trad way of passing new values to empty array through a for loop
const fahrenheit = [80, 72, 75,79,69];
const celcius = [];
for (const element of fahrenheit) {
    let c = (element - 32) * (5/9);
    celcius.push(c);
}
console.log(celcius)

const value = [32, 25, 53, 74];
const evenOrOdd = value.map(function(element) {
    return element % 2 === 0;
});
// because of the inline function notice the placement of enclosing map parameters
console.log(evenOrOdd)

const queue  = ["Jack", "Jonas", "Jeff"];
const displayQueue = queue.map(function(element, index) {
return index + " " + element;
});
console.log(displayQueue);

const lowerCaseCities = ["cape town", "tokyo", "berlin"];
const upperCaseCities =
lowerCaseCities.map((element) =>element.toUpperCase());
// using arrow functions instead of inline function. note placing of enclosing map parentheses
console.log(upperCaseCities); 

const names = ["Jess", "Serena", "Emma"];
names.push("Anastasia", "Dorothy")
const namesLength = names.map(function(element) {
    return element.length;
});
console.log(namesLength);

const numberValues = [5, 7, 9, 25];
const square = numberValues.map((element) => {
    return element * element
});
console.log(square);


// array map functions the traditional way
const testScores = [77, 59, 93, 68];
const A = []; 
for (const element of testScores) {
    if (element >= 90) {
        A.push(element);
    }
}
console.log(A)

// sorting an array using the filter function 
const participants =
["Jonas", "William", "Vuusi", "Tray"];
const wNames =
participants.filter(function(element) {
    return element[0] == "W";
});
console.log(wNames);

const week =
["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];
const weekDay =
week.filter((element, index) => {
return index > 0 && index < 6;
});
console.log(weekDay);

// moving onto the array reduce function 
const kms = [23, 33, 53,37];
let totalKms = 0;
for (const element of kms) {
totalKms += element;
}
console.log(totalKms);



const reps = [20, 10, 11, 14];
const totalReps =
reps.reduce(function(prev, curr) {
    return prev + curr;
});
console.log(totalReps);
const totalRepsArrow =
reps.reduce((prev, curr) =>
prev + curr);
console.log(totalRepsArrow);
// i realize what the issue was, my closing reduce parentheses was not on same line as operation

const buyPrice =
[300, 350, 250];
const discount =
[0.5, 0.10, 0.6];
const totalWithDiscount =
buyPrice.reduce(function(prev, curr, index) {
return prev + (curr * discount[index]);
});
// the return statement is interesting... need some time to discect 
console.log(totalWithDiscount);

const words = ["This", "sentence", "has", "no", "spaces"];
console.log(words);
const sentence =
words.reduce((prev, curr) =>{
return prev + " " + curr;
});
console.log(sentence);





