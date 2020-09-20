const modifier = (text) => {
  // This will always result in a shorter string, so no need to truncate it.
  return { text: text.replace(/ not /gi, ' ') }
}

// Don't modify this part
modifier(text)
