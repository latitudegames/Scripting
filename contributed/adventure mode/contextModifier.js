const modifier = (text) => {
  console.log("Input: " + text)
  /*
  history text needs placing in a seperate var
  to the actual history list, as history is read-only.
  */
  let hist = concatenateHistoryText(history); + " " + text;
  stop = playerDied(hist);
  //copied from input modifier, prevent new generation with stop=true
  if (stop) {
    text = null;
    state.message = "You have died and your adventure is at an end.";
  } else {
    delete state.message;
  }
  return { text, stop }
}

// Don't modify this part
modifier(text)
