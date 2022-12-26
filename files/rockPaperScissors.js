console.log("hi");
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("Error! Choose rock, paper or scissors.");
  }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'Great job! You won!'
    }
    if (userChoice === computerChoice) {
        return 'It is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry! The computer won.';
        } else {
            return 'You are a winner baby!'
        };
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry! The computer won.';
        } else {
            return 'You are a winner baby!'
        };
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry! The computer won.';
        } else {
            return 'You are a winner baby!'
        };
    }
}

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
playGame();
playGame();