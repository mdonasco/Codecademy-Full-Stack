let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a random target number between 0 and 9
const generateTarget = () =>  Math.floor(Math.random() * 10);

// Return the absolute distance between two numbers
const getAbsoluteDistance = (num1, num2) =>  Math.abs(num1 - num2);

// Determine which guess is closest to the target number
// Returns true if human wins and false if computer wins
const compareGuesses = (userGuess, compGuess, targetNum) => {
  return (getAbsoluteDistance(targetNum, userGuess) < getAbsoluteDistance(targetNum, compGuess)) ? true : false;
}

// Increase the winner's score after each round
const updateScore = winner => {
  if (winner.toLowerCase() === 'human') humanScore++;
  else if (winner.toLowerCase() === 'computer') computerScore++;
}

// Increase the round number
const advanceRound = () => currentRoundNumber++;
