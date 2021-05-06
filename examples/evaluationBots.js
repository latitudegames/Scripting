
// Checkout the repo examples to get an idea of other ways you can use scripting 
// https://github.com/latitudegames/Scripting/blob/master/examples

//CONTEXT MODIFIER
const modifier = (text) => {
  state.evaluationBot = 'JudgeBot'
return { text }
}

// Don't modify this part
modifier(text)


// OUTPUT MODIFIER
const modifier = (text) => {
  console.log(info)
return { text }
}

// Don't modify this part
modifier(text)



/*
  AVAILABLE BOTS
['KillBot', 'JudgeBot', 'EmpathyBot', 'SuccessBot', 'SantaBot'] -> Score
['GoblinBot'] -> Goblins killed, health lost, loot gained
['KittenBot'] -> Rapport gained, hunger
['SpaceLootBot'] -> Loot
['DCStatDifficultyBot'] -> Stat, Difficulty
['HungerBot'] -> Fullness
['SimplePossiblityBot'] -> PossibleAction1, PossibleAction2
*/