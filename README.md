# Scripting

### Input Modifier
Called each time the player gives an input and has the opportunity to modify that input. 

### Output Modifier
Called each time the model generates an output and has the opportunity to modify that output. 

### State
The `state` variable can be used to store information that's persistent across function calls. The state.memory.context value will be added to the games memory if it exists

### Console
`console.log("Some message")` will log messages that you can see in the scripting console
  
### Utils
`const questCompleted = await utils.checkQuestCompleted({history, quest, text})` can be used to check whether a quest was completed.
