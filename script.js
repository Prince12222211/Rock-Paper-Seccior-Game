let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //rock, paper ,  scissors
  //   Math.random();
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drwaGame = () => {
  console.log("Game Was Draw");
  msg.innerText = "Game Was Draw, Play again.";
  msg.style.backgroundColor = "#B98EA7";
};
const showrWinner = (userWin, userId, compChoice) => {
  if (userWin) {
    
    console.log("You Win!");
    msg.innerText = `You Win! Your ${userId} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    console.log("You lose");
    msg.innerText = `You lose ${compChoice} beats ${userId}`;

    msg.innerText = "You lose.";

    msg.style.backgroundColor = "red";
  }
};
const playGame = (userId) => {
  console.log("user choice=", userId);
  //genrate computer choice-> modular
  const compChoice = genCompChoice();
  console.log("comp choice=", compChoice);
  if (userId == compChoice) {
    drwaGame();
  } else {
    let userWin = true;
    if (userId == "rock") {
      //scissors, paper
      userWin = compChoice == "paper" ? false : true;
    } else if (userId === "paper") {
      //rock, scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showrWinner(userWin, compChoice);
  }
};
choices.forEach((choice) => {
  console.log(choice);
  // choice.addEventListener("")
  const choiceId = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    // console.log("Choice was clicked", choiceId);
    playGame(choiceId);
  });
});
