var dice1 = Math.floor(Math.random() * 6 + 1);
var dice2 = Math.floor(Math.random() * 6 + 1);
var player1Text = `images/dice${dice1}.png`;
var player2Text = `images/dice${dice2}.png`;
document.querySelector('.img1').src = player1Text;
document.querySelector('.img2').src = player2Text;
if (dice1 > dice2) {
  document.querySelector('h1').innerText = 'Player 1 wins';
} else if (dice1 === dice2) {
  document.querySelector('h1').innerText = 'Draw';
} else {
  document.querySelector('h1').innerText = 'Player 2 wins';
}
