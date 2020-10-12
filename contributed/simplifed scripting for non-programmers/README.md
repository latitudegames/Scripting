//Welcome to "EasyScript". EasyScript is a "simplification library" around the javascript scripting language used in AI Dungeon.
//It is intended to enable "non programmers" to do some cool things with their scenarios not possible using the AI Dungeon UI.

//Basically EasyScript allows you to create a list of keyword -> text pairs and have the text added into the game when the keywords appear in input / output.


//EasyScript uses a simple "IF THIS THEN THAT" syntax.

//Each EasyScript instruction consists of five parts divided by |.

//The parts are called: IF-Part|TEXT-Part|INSTRUCTION-Number|MODE-PART|CONTINUE-PART

//Each instruction needs to end with a ";"

//The IF-Part
//Put a comma seperated list of words into this part. AI Dungeon will look if all those words appear in the input/output and then add whatever is in the text part to the part of AI Dungeon set by the mode part

//The TEXT-Part
//The TEXT-Part is the text used for the chosen mode

//The INSTRUCTION-Number, this is a number identifing the instruction for use in the CONTINUE-part. Just number the instructions starting with 0.

//The CONTINUE-Part
//This part tells AI Dungeon which instruction it should do next when the words in the IF-Part appear. This part consists of a instruction number.
//Writing just a number into the CONTINUE-Part will tell AI Dungeon to wait for the instruction with that number to "trigger" next.

//MODE-Part
//This part chooses the MODE of your instruction by writing its name in capital letters: 

//INPUT: The TEXT Part will be added to what ever you have input into the game   
//MEMORY: The TEXT Part will get inserted into "/remember" 
//OUTPUT: The TEXT Part will be added to the response of the AI

//Examples:

//Imagine you got these instructions:

// beast,castle|The beast´s castle is very dark|0|MEMORY|1
// rose,touch|The beast suddenly appears behind you and roars at you loudly.|1|OUTPUT|2 
// scream|You flee out of the room|2|OUTPUT|3
// run,castle,behind|As you run away and leave the castle behind it crumbles to dust|3|MEMORY|N

////////////////////////////////////////////////////////////////////
// NOTE: INPUT instructions HAVE TO BE PUT INTO THE "INPUT Modifier" Tab, OUTPUT instructions INTO THE "OUTPUT Modifier" Tab. MEMORY Instructions can be in both tabs but its better to put them
// into the INPUT Modifier Tab only
///////////////////////////////////////////////////////////////////////

//Explanation:

// > I enter the beasts castle.    --->> AI Dungeon sees the words "beast" and "castle" in your input and executes the first instruction. It now remembers "The beast´s castle is very dark"
// > I see the rose and move to touch it. --->> AI Dungeon generates its response and adds "The beast suddenly appears behind you and roars at you loudly" to its response.
// > I scream very loudly. -->> AI Dungeon adds "You flee out of the room", to its response.
// > I run out of the castle and leave it behind. -->> AI Dungeon remembers "As you run away and leave the castle behind it crumbles to dust", the N in the CONTINUE-PART tells AID that there are no further 
// instructions

//Now you know how to use EasyScript. Below is the following line: "var instructions = [" "]. Write your instructions between the ". Do not change anything else. Separate the instructions with a ;
//Do not use " anywhere inside your instructions

//Example: var instructions = ["beast,castle|The beast´s castle is very dark|0|MEMORY|1;rose,touch|The beast suddenly appears behind you and roars at you loudly.|1|OUTPUT|2;"]

var instructions = [" "]