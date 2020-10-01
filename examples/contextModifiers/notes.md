# Notes

## Input Modifier

```js
const modifier = (text) => {
  state.notes = state.notes || []

  if (text.match(/> You note:/i)) {
    const note = text.replace(/> You note: ?/i, '').trim()
    state.notes.push({
      pattern: history.map(({text}) => text).join('').split("\n").pop(),
      note,
      actionCount: info.actionCount,
    })
    state.message = `Noted: ${note}`
    text = ''
  } else {
    delete state.message
  }

  return {text}
}

// Don't modify this part
modifier(text)
```

Set a note by typing `note: ` when in Do mode. It will be tagged to whatever the most recent line of text is, appearing below it to the AI, but not visible to the user.

## Context Modifier

```js
// info.memoryLength is the length of the memory section of text. text.slice(0, info.memoryLength) will be the memory.
// info.maxChars is the maximum length that text can be. The server will truncate text to this length. 
// info.actionCount is the number of actions in this adventure.

const modifier = (text) => {
  state.notes = state.notes || []

  const contextMemory = text.slice(0, info.memoryLength || 0)
  let context = info.memoryLength ? text.slice(info.memoryLength + 1) : text

  // Assumes that the notes are sorted from oldest to newest.
  state.notes = state.notes.filter(({ pattern, note, actionCount }) => {
    if (actionCount > info.actionCount) {
      // The user must have hit undo, removing this note.
      return false
    }

    const index = context.indexOf(pattern)
    
    if (index >- 1) {
      context = [context.slice(0, index + pattern.length), "\n", note, context.slice(index + pattern.length)].join('')
      return true
    } else {
      // Only keep ones that were found, otherwise they must have moved out of the history window.
      return false
    }
  })

  // Make sure the new context isn't too long, or it will get truncated by the server.
  context = context.slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, context].join("\n")
  return { text: finalText }
}

// Don't modify this part
modifier(text)
```

You can debug this by viewing what the model received in the Scenario Script page. It's the little brain icon in the upper-right.