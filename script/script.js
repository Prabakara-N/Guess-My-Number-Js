//elements

const inputEl = document.querySelector(".user-input");
const scoreEl = document.querySelector(".score");
const randomEl = document.querySelector(".random-number");
const messageEl = document.querySelector(".error-msg");
const btnSubmit = document.querySelector(".btn");

//global variables

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let score = 20;

// functions

const displayMessage = function (message, color) {
  messageEl.style.display = "block";
  messageEl.style.color = color;
  messageEl.innerText = message;
};

//event listners

btnSubmit.addEventListener("click", function () {
  const input = Math.round(Number(inputEl.value));

  //input validation

  if (input < 1 && input > 100) {
    displayMessage("Enter a Valid Input", "orangered");
  } else {
    if (score > 1) {
      //if user guess is correct

      if (input === randomNumber) {
        displayMessage(`You WON 😁, SCORE: ${score}`, "greenyellow");
        randomEl.innerText = randomNumber;
      }

      //if user guess is wrong
      else {
        if (input > randomNumber) {
          displayMessage("Your Guess is Higher", "orangered");
          score = score - 1;
          scoreEl.innerText = score;
        } else if (input < randomNumber) {
          displayMessage("Your Guess is Lower", "orangered");
          score = score - 1;
          scoreEl.innerText = score;
        }
      }
    }

    //if score = 0
    else {
      displayMessage("Game Over !", "9e0202");
      randomEl.innerText = randomNumber;
    }
  }

  console.log(input);
});
