# Scripting

Custom scripts on AI Dungeon scenarios allow you to modify the memory, input, and output as well as keep track of custom state objects that might be relevant for your adventure. You can write custom scripts in Javascript by going to the "Scripts" section while on web on the edit scenario page. For security reasons some Javascript functionality is locked down however. Submit a request if there is functionality you would like opened up and we can look into it.

## Examples 
You can check out some examples for how to use scripting [here](examples). We also have [user contributed scripts here](contributed).

## Don't Know How to Code?
Then now's a great time to learn! A good resource to learn javascript from scratch is this free course.

https://www.codecademy.com/courses/introduction-to-javascript

## History
You have access to (but can't modify) the `history` object which is a list of the previous actions of the player and of the AI, including the action type. Actions can be of types:
* "do"
* "say"
* "story"
* "continue" (For when the player presses enter/the send button without typing an action)

## Memory
You have access to (but can't modify) the `memory` object which is the current user defined memory.
* You can modify the memory the game uses by settings the `state.memory.context` value. This will replace the user defined memory.
* You can also set `state.memory.frontMemory`, which will include whatever is there in front of even the last action when it's fed into the model, but still not display it to the user. **Be careful with this, as setting the frontMemory to an incomplete sentence may result in the AI attempting to complete it in its output, but the frontMemory will not actually display to the player in the adventure.**

## Author's Note
You can set `state.memory.authorsNote` to provide a piece of text that will always be injected three lines back in the game history. This will not be shown to the user, but the AI will see it.

As an example, if you set `state.memory.authorsNote` to `the following paragraphs are scary.`, the AI will see `[Author's note: the following paragraphs are scary.]` three lines back, causing it to be more likely to generate scary text. Another example could be `a dragon will show up soon` or `the player will soon receive a quest`.

## Modifiers

### Shared Library
Prepended to the start of the other three scripts before execution so that you can share code between all three.

**NOTE: To share variables throughout the adventure or across modifier scripts, you should use the [State](https://github.com/latitudegames/Scripting#state) variable. This will not share variable values between modifiers.**

### Input Modifier
Called each time the player gives an input and has the opportunity to modify that input. When inside of an Input Modifier,
you can return `stop: true` in order to stop processing——see [examples/commandParser.js](examples/commandParser.js). Setting `stop: true` is important to make sure that you only spend energy for users when you need to.

**Note: The stop flag is currently bugged and will also prevent player's actions from showing up in the adventure, regardless of whether or not you modify their input. This note will be removed when this is no longer the case.**

### Context Modifier
Called each time the AI model is about to receive input and can modify what the model receives without affecting how the story itself looks. Originally, this was capped at a 75% [edit distance](https://en.wikipedia.org/wiki/Levenshtein_distance) due to OpenAI policy, but this is no longer the case as OpenAI models are no longer used in AI Dungeon.
When inside of a Context Modifier, you can return `stop: true` in order to stop processing.

### Output Modifier
Called each time the model generates an output and has the opportunity to modify that output. 

## World Info
You can read from the `worldInfo` parameter (an array of objects representing single world info entries) and modify the World Info of an adventure using the following functions - these are not methods of worldInfo, however:

You can modify worldInfo with the below functions (not methods of worldInfo):
* addWorldEntry(keys, entry) - This function will return the index at which the new world info entry is added to the `worldInfo` array. For instance, adding world info to an adventure with one existing world info will cause this function to return `1`, as this is the index of the newly added world info in the array. Remember, arrays are 0-based, so entry number one would be at index 0.
* removeWorldEntry(index)
* updateWorldEntry(index, keys, entry)

Things to note:
* `isNotHidden` is a now-removed feature that would hide world info from players of an adventure when set to false. You may notice an extra argument in old world info management scripts that use addWorldEntry and updateWorldEntry - this is why. It won't break the script, but it no longer does anything.
* `index` in the above functions refers to the position of a world info entry in the `worldInfo` object, which is an array of objects representing your world info.
* As of a recent update, updateWorldEntry will no longer attempt to add a new world info entry if a script attempt to update a nonexistent entry. Scripts that relied on this behaviour will no longer work, and instead will return an error like `World info not found at index xyz in updateWorldEntry`.

## State
The `state` variable can be used to store information that's persistent across function calls/modifiers. 
* The `state.message`, if provided, can be a string that will be displayed as an alert in the game.
  When in 3rd person mode, `state.message` can also be an object (or an array of objects) with a list of the multiplayer character names
  who should see the message. E.g., `[{ text: 'Only you can see this!', visibleTo: ['Sam', 'Jane']}]`
* The `state.memory.context` value will replace the user defined memory if it exists
* `state.displayStats`, `state.skills`, `state.disableRandomSkill`, `state.skillPoints`, `state.inventory` and `state.stats` were all used in an experimental scripted scenario for Premium users, but have since been deprecated and no longer work. You may find them in example scripts on the repo, but they likely will not work any more.

* You can set any variable on state to store and modify adventures throughout an adventure. This includes variables other than the ones mentioned above - they will persist throughout the adventure and be freely read and written from/to in the input, output and context modifiers.

## Console
`console.log("Some message")` will log messages that you can see in the scripting console

## Info

`info` contains some useful values, depending on which modifier you're in.

All modifiers have access to:
- `info.actionCount`, the number of actions in the adventure so far.
- `info.characters`, an array of Multiplayer character info stored as objects - players who enter a third-person Multiplayer adventure and set a name for their characters will have their character name appear here. Currently each object just has one key of `name`, formatted like so: `{ name: "Sam" }`.

When in a Context Modifier:
- `info.memoryLength`, the length of the memory portion of text (if any).
- `info.maxChars`, the total allowed length of the context after which it will be truncated.

## Last Model Input (LMI)/Script Logs & Errors
Clicking on the brain icon in the scripting interface will open a modal with two tabs. In Last Model Input, you can see the last context the AI was provided from an adventure derived from the scenario you're working on. In Script Logs & Errors, you can see the console logs for each modifier's script, and the state. Each log will have a header clarifying which modifier it came from and what time it ran and generated. The LMI and logs here will expire after a few minutes, so it's recommended to keep a second window/tab open with this screen up while you playtest your scripted scenarios.
