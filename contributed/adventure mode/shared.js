/*
lumps story history all into one big string for
the playerDied() function's regex to search.
*/
function concatenateHistoryText(history) {
  let histText = "";
  
  for (l of history) {
    if (l.type == "story" || l.type == "continue") {
      histText += " " + l.text
    }
  }
  console.log("History: " + histText);
  return histText;
}

/*
  the regex was copied from the OG ai dungeon colab repo
  and touched up to work in JS. not as effective as a
  classifier, but it should still work fine!
  */
function playerDied(hist) {
  
  const dead_regex = new RegExp(/you('re| are) (dead|killed|slain|no more|nonexistent)|you (die|pass away|perish|suffocate|drown|bleed out)|you('ve| have) (died|perished|suffocated|drowned|been (killed|slain))|you (\w* )?(yourself )?to death|you (\w* )*(collapse|bleed out|chok(e|ed|ing)|drown|dissolve) (\w* )*and (die(|d)|pass away|cease to exist|(\w* )+killed)/g, "i");
  let isDead = false;
  //check history for "you died" regex phrases.
  let loweredHist = hist.toLowerCase();
  isDead = dead_regex.test(hist);
  return isDead;
}