function randomDice(){
    return Math.round(Math.random()*5+1);
}

var dice1 = randomDice();
var dice2 = randomDice();
var dice3 = randomDice();
var result="";

if (dice1==dice2&&dice1==dice3){
    result = "dices are all equals";
} else if (dice1!=dice2&&dice2!=dice3&&dice1!=dice3){
    result = "none are equals";
} else if (dice1==dice2||dice2==dice3){
    result = "two dices are equals"
} else{
    result = "two dices are equals"
}

console.log(dice1,dice2,dice3, result);