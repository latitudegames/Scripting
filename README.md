# Scripting

Custom scripts on AI Dungeon scenarios allow you to modify the memory, input, and output as well as keep track of custom state objects that might be relevant for your adventure. You can write custom scripts in Javascript by going to the "Scripts" section while on web on the edit scenario page. For security reasons some Javascript functionality is locked down however. Submit a request if there is functionality you would like opened up and we can look into it.

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
