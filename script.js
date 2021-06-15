var randomNum1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "media/"+"dice"+randomNum1+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var randomNum2 = Math.floor(Math.random()*6)+1;
var randomDiceImages = "media/"+"dice"+randomNum2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImages);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML='Player 1 Wins!';
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML='Player 2 Wins!';
    }
else{
    document.querySelector("h1").innerHTML='Draw';
}