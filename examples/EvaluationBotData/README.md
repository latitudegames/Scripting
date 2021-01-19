# Evaluation Bots
Bots and their usage

# Input
- `DCStatDifficultyBot` - Evaluates the stat required and difficulty of an action (returns hard/medium/easy difficulty)
- `InputDCattributeBot` - Evaluate the attribute and difficulty of an action (returns numeric difficulty)

# Input Special Usage
- `SimplePossibilityBot` - Evalutes two possible actions, PossibleAction1 and PossibleAction2.
  - Special Usage: When `state.inputBot='SimplePossibilityBot'` you need to provide a character description in `state.contextualString`. This can be up to 75 characters (additional length will be truncated). `SimplePossiblityBot` will use the character description with the actions to provide information on what the character can do in the situation. Useful for enforcing limitations such as missing limbs or weapons.

# Output
The following bots are best used on output.

## Multipurpose Evaluation Bots

- `GoblinBot` - Evaluates whether it detected any Goblins killed, health was lost, and loot gained
- `KittenBot` - Evaluates whether rapport was gained or a kitten got hungrier
- `SpaceLootBot` - Evaluates whether loot would be found (on a spaceship)
- `HungerBot` - Evaluates whether the player would get hungrier or not
- `RestDetectBot` - Evaluates whether or not the user got rest

## Simple Evaluation Bots
There are several evaluation score bots. These bots can be used on either input or output to score different text. They all return a `reason` and a `score` which is roughly along the below descriptions.
- `KillBot` - Evaluates whether the player is killing things
- `JudgeBot` - Evaluates whether an action was just
- `EmpathyBot` - Evaluates whether an action showed empathy
- `SuccessBot` - Evaluates whether an action succeeded
- `SantaBot` - Evaluates whether an action showed christmas spirit (An overly judgemental SantaBot also exists but is not currently available)

