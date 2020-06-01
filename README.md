# Scripting

### Input Modifier
Called each time the player gives an input and has the opportunity to modify that input. 

### Output Modifier
Called each time the model generates an output and has the opportunity to modify that output. 

### State
The `state` variable can be used to store information that's persistent across function calls. 
* The `state.memory.context` value will be added to the games memory if exists
* The `state.message` value will be displayed as a extra message in the game (if it exists) 
* You can set any variable on state to store and modify adventures throughout an adventure.

### Console
`console.log("Some message")` will log messages that you can see in the scripting console
