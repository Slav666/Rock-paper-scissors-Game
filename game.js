const gameSummary = {
  number: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

let game = {
  playerHand: "",
  computerHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px yellow";
  console.log(game.playerHand);
}

function computerChoice() {
  computerHand = hands[Math.floor(Math.random() * 3)].dataset.option;
  return computerHand;
}

function checkResult(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You won!";
  } else {
    return "You lost!";
  }
}

function publishResult(player, computer, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="computer-choice"]').textContent =
    computer;
  document.querySelector("[data-summary=who-win]").textContent = result;
}

function startGame() {
  {
    if (!game.playerHand) return alert("Choose hand!");
  }
  game.computerHand = computerChoice();
  const gameResult = checkResult(game.playerHand, game.computerHand);
  console.log(gameResult);
  publishResult(game.playerHand, game.computerHand, gameResult);
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));
document.querySelector(".start").addEventListener("click", startGame);
