var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png" ; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //image/dice1.png - image/dice6.png 

document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png" ; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //image/dice1.png - image/dice6.png 

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML=("Player 1 wins");
}else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML=("Draw!");
}else {
    document.querySelector("h1").innerHTML=("Player 2 wins");
}