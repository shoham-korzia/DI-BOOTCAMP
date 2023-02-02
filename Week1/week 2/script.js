//exercise 1
let favoriteFood = "ribs";
let favoriteMeal = "dinner";
console.log("I eat " + favoriteFood + " for " + favoriteMeal );
//exercise 2 (part1)
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory";
console.log("i have watched " + myWatchedSeriesLength + " tv shows" + ": " + myWatchedSeriesSentence);
//(part2)
myWatchedSeries.splice(2,1,"friends");
myWatchedSeries.push("from");
myWatchedSeries[0] = "you";
myWatchedSeries.pop([1]);
console.log(myWatchedSeries[1].charAt(2));
console.log(myWatchedSeries);
//exercise3
let cel = "10"
let far = "50"
console.log(cel + "°C is " + far + "°F" );
//exercise4
//prediction1 = 55, they are both numbers
let c;
let a = 34;
let b = 21;

console.log(a+b)
//answer1 is 55
//prediction2 = undefined, there is no number to add
a = 2;

    console.log(a+b)