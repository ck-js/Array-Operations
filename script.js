
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




