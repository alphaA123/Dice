var randomNumber1=Math.floor(Math.random()*6)+1;
var random1="dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",random1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var random2="dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",random2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
