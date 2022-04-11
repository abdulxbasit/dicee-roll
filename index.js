var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1)+1;
console.log(randomNumber1);
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber2);
function whoWon(str){
  var str;
  if(randomNumber1>randomNumber2){
    str = "Player 1 Wins🎉";
  }
  if(randomNumber2>randomNumber1){
    str = "Player 2 Wins🎉";
  }
  if(randomNumber1===randomNumber2){
    str = "Draw";
  }
  return str;
}
document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";
document.querySelector(".img2").src = "images/dice"+randomNumber2+".png";
document.querySelector("h1").innerHTML = whoWon();
