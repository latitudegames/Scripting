//input modifiers to set up stats

// creates stats to open up the stats overlay
const modifier = (text) => {    
    state.stats = {stats:{strength:{level: 4, cost:2}, agility:{level: 1, cost:5}}, statPoints:50}
    return ({text})
  }
  
  // Don't modify this part
  modifier(text)
  
