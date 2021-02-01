
const modifier = (text) => {
  let stop = state.stop || state.stopped

  const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength) : text
  const lines = context.split("\n")

  if (lines.length > 2) {
    // Uncomment to use this!
    // const authorsNote = "Everyone in this story is an AI programmer."
    // lines.splice(-3, 0, `[Author's note: ${authorsNote}]`)
  }

  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText, stop }
}

// Don't modify this part
modifier(text)
