# Scripting

Custom scripts on AI Dungeon scenarios allow you to modify the memory, input, and output as well as keep track of custom state objects that might be relevant for your adventure. You can write custom scripts in Javascript by going to the "Scripts" section while on web on the edit scenario page. For security reasons some Javascript functionality is locked down however. Submit a request if there is functionality you would like opened up and we can look into it.

## Examples 
You can check out some examples for how to use scripting [here](examples)

## Don't Know How to Code?
Then now's a great time to learn! A good resource to learn javascript from scratch is this free course.

https://www.codecademy.com/courses/introduction-to-javascript

### History
You have access to (but can't modify) the `history` object which is a list of the previous actions of the player and of the AI.

### Memory
You have access to (but can't modify) the `memory` object which is the current user defined memory.
You can modify the memory the game uses by settings the `state.memory.context` value. This will replace the user defined memory.
You can also set `state.memory.frontMemory` which will include whatever is there in front of even the last action when it's fed into the model, but still not display it to the user.

### Quests
You can modify the quests property to change the quests of the adventure mid game. 

### Input Modifier
Called each time the player gives an input and has the opportunity to modify that input. 

### Output Modifier
Called each time the model generates an output and has the opportunity to modify that output. 

### World Entries
You can read from the `worldEntries` parameter (same as world info that you can set on the scenario)

You can modify worldEntries with the below functions
* addWorldEntry(keys, entry)
* removeWorldEntry(index)
* updateWorldEntry(index, keys, entry)

### State
The `state` variable can be used to store information that's persistent across function calls. 
* The `state.memory.context` value will replace the user defined memory if it exists
* The `state.message` value will be displayed as a extra message in the game (if it exists) 
* You can set any variable on state to store and modify adventures throughout an adventure.

### Console
`console.log("Some message")` will log messages that you can see in the scripting console
