const modifier = (text) => {
  /*
  history text needs placing in a seperate var
  to the actual history list, as history is read-only.
  */
  let hist = concatenateHistoryText(history) + " " + text;
  dead = playerDied(hist);
  if (dead) {
    /*
    shows a death message above action icons and
    adds the classic line to the end of output
    */
    state.message = "- You have died! -";
    text += "\n- YOU DIED! GAME OVER! -";
  } else {
    delete state.message;
  }
  // You must return an object with the text property defined.
  return { text }
}

// Don't modify this part
modifier(text)
