const people = ["Greg", "Mary", "Devon", "James"];
delete people [0];
people.splice(2,1,"jason");
people.push("shoham");
people.indexOf("Mary");

console.log(people.slice(3));
console.log(people.slice(0));
people.indexOf("foo")

for (i = 0; i < people; i ++){
    console.log(people[i]);
}

let n = prompt("enter a number");
while (n < 10) {
  n = prompt("enter a number");
}

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },

    
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1] + " " + building.numberOfRoomsAndRent.dan[0]);

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(building.numberOfRoomsAndRent.dan[1]);
}
const family = {members: 4, children: 2, pets: 1}
for (let x in family) {
  console.log(x) 
  console.log(family[x]) 
}

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  for (let i = 0; i < 2; i++) {
    console.log(details)
}
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();
names.forEach( function(word){
    console.log( word.charAt(0) );
});