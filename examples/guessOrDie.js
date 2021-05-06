// Input Modifier
const modifier = (text) => {
  if(!state.initialized) {
    state.initialized = true;
    state.randomNumber = Math.round(Math.random()*9999+1);
    state.remainingGuesses = 13;
  }
    
  var match = text.match(/(\d+)/)
  if(match && match[1]) {
    state.remainingGuesses--;
    var number = parseInt(match[1]);

    var output = "You have "+state.remainingGuesses+" guesses remaining.  ";

    if(number == state.randomNumber) {
      output += "You guessed the number!  Congratulations, you win!";
    } else if (state.remainingGuesses <= 0) {
      output += "You ran out of guesses!  You are dead.  You lose!";
    } else if (number > state.randomNumber) {
      output += "Your guess is too high!";
    } else if (number < state.randomNumber) {
      output += "Your guess is too low!";
    }
    state.nextOutput = output;
    return {text}
  }
  state.nextOutput = "Please enter a number!";
  return {text};
}

modifier(text)

// Output Modifer
const modifier = (text) => {
  return {text: state.nextOutput ? state.nextOutput : ""};
}

modifier(text)
