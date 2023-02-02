//exercise 1
let x = 5;
let y = 2;
if (x>y){
    console.log("x is the bigger number");
}
else {
    console.log("y is the bigger number");
}
//exercise 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua"){
    console.log("I love Chihuahuas, it is my favorite dog breed");
}
else {
    console.log("I dont care, I prefer cats");
}
//exerccise 3
let number = prompt("enter a number");
if (number % 2 === 0){
    alert(number + " is an even number");
}
else {
    alert(number + " is an odd number");
}
//exercise 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 0){
    console.log("there are no users online");
}else if (users.length ==1){
    console.log(users[0] + "is online");
}
else if (users.length == 2){
    console.log(users[0], users[1] + " is online");
}
else {
    console.log(users[0], users[1] +" and " + (users.length - 2) + " more")
}
//loops exercise 1
for (i = 1; i <= 10; i ++){
console.log(i);}
//exercise 2
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let b = 0;
while (b < alphabet.length) {
    console.log(alphabet[b]);
    b++;
}

