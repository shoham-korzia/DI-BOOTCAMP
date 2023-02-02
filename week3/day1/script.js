// // function infoAboutMe(){
// //     console.log("my name is shoham korzia, i was born in johannesburg South Africa in 2004.");
// // }
// // console.log(infoAboutMe());

// // function infoAboutPerson(personName, personAge, personFavoriteColor){
// //     console.log(`${personName},${personAge},${personFavoriteColor}`);
// // }
// // console.log(infoAboutPerson("shoham","18","blue"));
// // console.log(infoAboutPerson("joel","18","green"));

// // function calculateTip(){
// //     let tip = 0;
// //     let amount = prompt("enter your amount");
// //     if (amount < 50){
// //         tip = amount*.2 ;
// //     }
// //     else if (amount >50 <200){
// //         tip = amount*.15;
// //     }
// //     else {
// //         tip = amount*.1;
// //     }
// //     let finalAmount = Number(tip) + Number(amount);
// //     console.log(finalAmount);
// // }

// // console.log(calculateTip());

// // function isDivisible(){
// //     let sum = 0;
// //     for(let i = 0; i < 500; i ++){
// //     if (i%23 == 0){
// //         console.log(i);
// //         let sum = 0;
// //     age.forEach(item =>{
// //         sum+=item
// //     })        
// //     console.log(sum);
// //     }
// // }}
// // console.log(isDivisible());

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }
// let shoppingList = ["banana", "orange","apple"];
// function myBill(){
//     let priceSum = 0;
//     for(i=0; i<shoppingList.length-1; i++){
//         if(shoppingList[i] in stock && stock[shoppingList[i]]>0){
//             priceSum += prices[shoppingList[i]]
//         }
//     }
//     console.log(priceSum)
// }
// console.log(myBill());

// function changeEnough(itemPrice, amountOfChange) {
//     if(amountOfChange>=itemPrice){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(changeEnough(4.25, [25, 20, 5, 0]));

// function hotelCost(){
//     let nights = prompt("how mant nights would you like to stay");
//      nights = Number(nights);
//     console.log(typeof nights);
//     if (nights === null || nights.length === 0 || typeof nights != "number" || isNaN(nights) ){
//         hotelCost();
//     }
//     else{
//             console.log(nights*140);
//     }
// }
// hotelCost();

function rentalCarCost(){
    let days = prompt("how mant days would you like to rent");
    days = Number(days);
   console.log(typeof days);
   if (days === null || days.length === 0 || typeof days != "number" || isNaN(days) ){
       hotelCost();
   }
   else{
           console.log(days*40);
   }
   if (days < 10){
    console.log(days*40 + days*40*.05);

   }
}
rentalCarCost();

function totalVacationCost() {
    let hotelsCost = hotelCost();
    let planeCost = planeRideCost();
    let carCost = rentalCarCost();
    return carCost + hotelsCost + planeCost;
  }
  console.log(`Your total vacation cost is: ${totalVacationCost()}`);