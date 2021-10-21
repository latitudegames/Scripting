# Death Detection

Basically what it says in the title- as Adventure Mode is expecting to be removed soon, I wanted to use scripting to emulate it, along with re-adding the classic "- YOU DIED! GAME OVER! -" line that shows up after you die. Unfortunately, I cannot disable action buttons with this, but you can do that yourself fairly easily through the settings screen in-app.

## What it does

I copied over the regex from the original AI Dungeon Colab's death detection code, tweaked it to work in JavaScript (The original is written in Python) and set up some code to check the story history for instances of phrases like "You die" or "You have been slain". Should this happen, the output gets the aforementioned death message line added to the bottom and inputs and continues stop being accepted. Of course, you can always revert/undo/alter out of this.

## How to use in a scenario

1. Download the .zip file in this directory and navigate to the scripting page on the scenario you want to add this to.
2. Click the upload button in the top right (has an arrow pointing up from a rectangle that looks like a computer or hard drive) and choose the zip file.
3. Make sure that all four tabs on the scripting page have the right code, and you're done.
You don't need to extract it- the modifier tabs should be filled in with the right scripts from the zip folder automatically.

## MIT License
Copyright 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
