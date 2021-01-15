
// Checkout the repo examples to get an idea of other ways you can use scripting 
// https://github.com/latitudegames/Scripting/blob/master/examples


// OUTPUT MODIFIER
const modifier = (text) => {
  
    state.displayStats = [{key:'Text Length', value: text.length, color: 'red'}]

  return { text }
}

// Don't modify this part
modifier(text)
