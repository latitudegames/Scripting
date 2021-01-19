
// Checkout the repo examples to get an idea of other ways you can use scripting 
// https://github.com/latitudegames/Scripting/blob/master/examples

//INPUT MODIFIER
const modifier = (text) => {
  state.inputBot = 'DCStatDifficultyBot'
return { text }
}

// Don't modify this part
modifier(text)


// CONTEXT MODIFIEr
const modifier = (text) => {
  console.log(info?.inputEvaluation)
return { text }
}

// Don't modify this part
modifier(text)



/*
  AVAILABLE BOTS
['DCStatDifficultyBot'] - Stat, Difficulty
['InputDCattributeBot'] - DC, Attrbute
['SimplePossibilityBot'] - Possibility 1, Possibility 2
*/