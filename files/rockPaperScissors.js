console.log("hi");
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
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

