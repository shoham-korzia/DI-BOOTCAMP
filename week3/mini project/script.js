function playTheGame(){
    let start = confirm("would you like to play a game");
        if (start == false){
            alert("okay, goodbye!");
            return;
        }
        else{
            let num = prompt("please enter a number");
            num = Number(num);
            console.log(typeof num);
            if (num === null || num.length === 0 || typeof num != "number" || isNaN(num) || num > 10){
                alert("Sorry Not a valid number, Goodbye");
            }
            else{
                let computerNumber = Math.floor(Math.random() * 10);
                console.log(computerNumber);
                compareNumbers(num,computerNumber);
            }
        }
}

function compareNumbers(num,computerNumber){
    let tries = 3;
    while(tries > 0){
    if(num === computerNumber){
        alert("WINNER!!");
        
    }
    else if (num > computerNumber){
        alert("your number is too big");
        num = prompt("please enter a number");  
    }
    else if (num < computerNumber){
        alert("your number is too small");
        num = prompt("please enter a number");
    }
    tries--; 
    
    
}
    alert("you have run out of tries")

}
