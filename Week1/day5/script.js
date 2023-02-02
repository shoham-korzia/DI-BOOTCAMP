let addressNumber = 60;
let addressStreet = "levinsky"
let country = "Israel"

let globalAddress = "i live in "+addressNumber + " " + addressStreet + " " + country;

console.log(globalAddress);

let pets = ["cat","dog","fish","rabbit","cow"];
console.log(pets[1]);
pets.splice(3, 1, "horse");
console.log(pets);
console.log(pets.length);

let user = {userName: "bob",password: "bob123"};
  let database = [user];

  let user1 = {username: "john", timeline:"now"};
  let user2 = {username: "tom", timeline: "now"};
  let user3 = {username: "jim", timeline: "now"};

  let newsfeed = [user1, user2, user3];
console.log(newsfeed[0].username);