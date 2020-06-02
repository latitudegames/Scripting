// Here's a fun scripting example where players have to learn these magic spells to have cool effects.
// The world info has entries that should hopefully lead people to these spells and so that they can find and cast them.
// Can find the scenario at https://play.aidungeon.io/scenario/e982a8f0-a473-11ea-af38-d1932fa9d9e0
// I changed the spell names so it doesn't ruin the discovery if you play the adventure.

const modifier = (text) => {
  
  let modifiedText = text
  state.message = ''
  
  if(!state.spells){
    state.spells = []
  }
  
  const spells = {
    'SPELL1': 'a deathly fire ball spell that',
    'SPELL2': 'turning yourself into a cloud allowing you to move at will',
    'SPELL3': 'a dark spell that summons an evil demon. You hear a dark rumbling and see a cloud of black smoke appear. Out of it appears a large horned demon'
  }
  
  const lowered = text.toLowerCase()
  for(spellName in spells){
    if(lowered.includes('cast ' + spellName)){
      if(!state.spells.includes(spellName)){
        state.spells.push(spellName)
        state.message = "Congrats you've learned the " + spellName + " spell!"
      }
      modifiedText = text + '\n' + 'You cast ' + spellName + ', ' + spells[spellName]
    }
  }
    
    return {text: modifiedText}
}

modifier(text)


