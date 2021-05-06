const themes = [
  {
    text: 'ghost story',
    matcher: /ghost|halloween|spooky/i,
  },
  {
    text: 'trick-or-treat',
    matcher: /trick.or.treat|halloween|spooky/i,
  },
  {
    text: 'spooky',
    matcher: /halloween|spooky/i,
  },
]

const modifier = (text) => {
  if (!state.setup) {
    state.theme = Math.floor(Math.random() * themes.length)
    state.setup = true
    state.matched = false
  }

  const theme = themes[state.theme]

  if (!state.matched && text.match(theme.matcher)) {
    state.matched = true
  }

  if (state.matched) {
    state.memory = {}
  } else {
    const halloween = ` It involves Halloween and has a ${theme.text} theme.`
    state.memory = { authorsNote: `the rest of this story is silly & playful.${halloween}` }
  }

  return {text}
}

// Don't modify this part
modifier(text)
