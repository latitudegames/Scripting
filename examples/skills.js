//input modifiers to set up skills


//EXAMPLE 1
//creates skills with 0 skill points
const modifier = (text) => {    
    state.skills = {'turtle':1}
  }
  
  // Don't modify this part
  modifier(text)
  
//EXAMPLE 2
//creates skills with 1 skill point
const modifier = (text) => {    
    state.skills = {'turtle':1}
    state.skillPoints = 1
  }
  
  // Don't modify this part
  modifier(text)
  
//EXAMPLE 3
//creates skills with 5 skill points and 
const modifier = (text) => {    
    state.skills = {'turtle':1}
    state.skillPoints = 1
    state.disableRandomSkill = true
  }
  
  // Don't modify this part
  modifier(text)
  