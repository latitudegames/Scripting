const modifier = (text) => {
  console.log("Input: " + text)
  /*
  history text needs placing in a seperate var
  to the actual history list, as history is read-only.
  */
  let hist = concatenateHistoryText(history);
  let stop = playerDied(hist);
  if (stop) {
    /*
    prevent the input from generating text with stop=true and
    stops it from being added to context by setting it to null
    */
    text = null;
    //puts this message above the action buttons and textbox
    state.message = "You have died and your adventure is at an end.";
  } else {
    delete state.message;
  }
  return { text, stop }
}

modifier(text)
