var dice1 = Math.random();
var dice2 = Math.random();

dice1 = Math.floor((dice1 * 6) + 1);
dice2 = Math.floor((dice2 * 6) + 1);

if(dice1 > dice2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else if (dice2 > dice1) {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerText = "Draw!";
}

rollDice("#dice1",dice1);
rollDice("#dice2",dice2);

function rollDice(id,roll) {
  switch(roll){
    case 1:
      document.querySelector(id).setAttribute("src","images\\dice1.png");
      break;
    case 2:
      document.querySelector(id).setAttribute("src","images\\dice2.png");
      break;
    case 3:
      document.querySelector(id).setAttribute("src","images\\dice3.png");
      break;
    case 4:
      document.querySelector(id).setAttribute("src","images\\dice4.png");
      break;
    case 5:
      document.querySelector(id).setAttribute("src","images\\dice5.png");
      break;
    case 6:
      document.querySelector(id).setAttribute("src","images\\dice6.png");
      break;
  }
}
