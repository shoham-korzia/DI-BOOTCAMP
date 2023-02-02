let numbers = [123, 8409, 100053, 333333333, 7]

numbers.forEach(n => {
  if (n % 3 === 0) console.log(n + " true");
}); 


let guestlist = { randy: "germany",
karla: "france",
wendy: "japan",
norman: "england",
sam: "argentina"
}
// const guest = prompt("enter your name");
// if (guest in guestlist){
//     console.log("i am " + guest)
// }else {
//     console.log("not apart of guestlist");}


let age = [20, 5, 12, 43, 98, 55]
    // console.log(age[0] + age[1] + age[2] + age[3] + age[4] + age[5]);
    let sum = 0;
    age.forEach(item =>{
        sum+=item
    })        
    console.log(sum);

    let max =0;
age.forEach(item =>{
    if (item > max){
        max = item;
    }
})
console.log(max);

let user1 = {fullName: "john doe",
 mass: 60,
 height: 175,
bmi: function (){
    return (user1.mass/user1.height*user1.height);
}}

let user2 = {fullname: "jane doe",
mass: 50,
height: 167,
bmi: function (){
    return (user2.mass/user2.height*user2.height);
}}
let user1Bmi = console.log(user1.bmi());
let user2bmi = console.log(user2.bmi());

