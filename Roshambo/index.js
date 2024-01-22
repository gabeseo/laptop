// Calling the IDs from the index.html page to the js file
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
// using this for getting all of the ID:button
// could create a class (className) for the the buttons in the HTML file if we wanted them to do separate things and on the js file you could use the class name for the buttons instead by using querySelector instead of querySelectorAll
const possibleChoices = document.querySelectorAll('button') 
//global variables
let userChoice
let computerChoice
let result

// grabbing all of the buttons and for all of the buttons, when the user clicks the button, make them pass through a function (in this case an event (e))
// After all of this, make the computer generate a random choice by creating a function that creates a computer choice and a function that generates a result
// Get the target id and save it as the userChoice globally, thus creating a let
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

//creating a function to make the computerChoice random and display it
function generateComputerChoice() {
    //could also do possibleChoices.length instead of 3
    //Math floor rounds the number down to an integer
    const randomNumber = Math.floor(Math.random() * 3) 
    //Giving each option a value between 0-3)
    if (randomNumber === 0) {
        computerChoice = 'rock'
    }

    if (randomNumber === 1) {
        computerChoice = 'paper'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
// Getting all of the possible results in RPS and creating a display for each one
function getResult() {
    if (computerChoice === userChoice) {
        result = "It is a tie!"
    }

    if (computerChoice === 'rock' &&  userChoice === 'paper') {
        result = 'You win!'
    }

    if (computerChoice === 'rock' &&  userChoice === 'scissors') {
        result = 'You lose!'
    }

    if (computerChoice === 'paper' &&  userChoice === 'scissors') {
        result = 'You win!'
    }

    if (computerChoice === 'paper' &&  userChoice === 'rock') {
        result = 'You lose!'
    }

    if (computerChoice === 'scissors' &&  userChoice === 'rock') {
        result = 'You win!'
    }

    if (computerChoice === 'scissors' &&  userChoice === 'paper') {
        result = 'You lose!'
    }
    resultDisplay.innerHTML = result
}