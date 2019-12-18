var dice1 = Math.random();
var dice2 = Math.random();

dice1 = Math.floor((dice1 * 6) + 1);
dice2 = Math.floor((dice2 * 6) + 1);

var img1 = "dice" + dice1 + ".png";
var img2 = "dice" + dice2 + ".png";

if(dice1 > dice2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else if (dice2 > dice1) {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerText = "Draw!";
}


document.querySelector("#dice1")
    .setAttribute("src",`images\\${img1}`);
document.querySelector("#dice2")
    .setAttribute("src",`images\\${img2}`);
