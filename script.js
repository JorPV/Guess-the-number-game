let minNum = 0;
let maxNum = 25;
let number = null;
let playerName;
let yourNumber;
let timesTried = 5;

let person = window.alert("Welcome to the guess the number game!");
playerName = prompt("Please enter your name");
alert("Hello " + playerName + ". Let's play this game!");

function guessNumber () {
  alert(
    "Je have 5 trials to guess the number. The number is between " +
      minNum +
      " and " +
      maxNum +
      ". Good luck!"
  );

  number = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  console.log("Pssst the number is: " + number);

  while  (yourNumber !== number) {
    if (timesTried < 1) {
      alert( "Too bad " + playerName + ". Unfortunately, you did'nt guessed the correct number. You can try again!");
      timesTried = 5;
      number = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    }

   yourNumber = parseInt(prompt("Enter a number between 0 and 25 to start guessing..."));
  // yourNumber = parseInt(prompt("Enter another number.."));

  while (isNaN (yourNumber)) {
   yourNumber = parseInt (
      prompt("That is not a number. Write only numbers in!")
    );
  }

  alert("Your number is: " + yourNumber);

  if  (yourNumber > number) {
    timesTried--;
    if (timesTried < 1) {
      alert("This was your last try.");
    } else {
      alert(
        "Wrong, your number is too high. You have: " +
          timesTried +
          " tries. Try again:"
      );
    }
  } else if  (yourNumber < number) {
    timesTried--;
    if (timesTried < 1) {
      alert("This was your last try.");
    } else {
      alert(
        "Unfortunately, your number was too low. You have: " +
          timesTried +
          " tries. Try again:"
      );
    }
  } else {
    alert("Good shot! The correct number was: " + yourNumber);
    alert( "You have finished the game. Thanks for playing " +
        playerName +
        ", see you next time!"
    );
  }
};
}


