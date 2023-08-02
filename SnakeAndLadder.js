const winningPosition = 100;
let diceCounter = 0;
console.log("Welcome to snake and ladder game");
function playGame(playerPosition) {
  const noPlay = 0,
    ladder = 1,
    snake = 2;
  let diceNumber = Math.floor(Math.random() * 7);
  diceCounter++;
  let option = Math.floor(Math.random() * 3);
  switch (option) {
    case noPlay:
      break;
    case ladder:
      playerPosition += diceNumber;
      if (playerPosition > winningPosition) playerPosition -= diceNumber;
      break;
    case snake:
      playerPosition -= diceNumber;
      if (playerPosition < 0) playerPosition = 0;
      break;
  }
  return playerPosition;
}
let playerOnePosition, playerTwoPosition;
for (
  playerOnePosition = 0, playerTwoPosition = 0;
  playerOnePosition < winningPosition && playerTwoPosition < winningPosition;

) {
  playerOnePosition = playGame(playerOnePosition);
  playerTwoPosition = playGame(playerTwoPosition);
}

console.log("No of times dice rolled is : " + diceCounter);
console.log(
  "Player one position is " +
    playerOnePosition +
    " Player two position is " +
    playerTwoPosition
);
if (playerOnePosition > playerTwoPosition)
  console.log("Player one is winner....!!!!");
else console.log("Player two is winner....!!!!");
