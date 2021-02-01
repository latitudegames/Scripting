
const modifier = (text) => {
  // Define the persisting stop attribute of state upon starting the adventure
  if (state.stopped == undefined) {
    state.stopped = false;
  }

  // Define the command array
  state.commands = [];

  // Add addCommand calls here

  // Parse any commands present in text
  modifiedText = parseCommand(text);

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
