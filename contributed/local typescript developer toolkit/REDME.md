# Local Typescript Developer Toolkit

As title suggests, it's not a script per se, but a set of preset tools for creating one in typescript and transpiling into 4 JS files.

## Why should I use it?

Why not? But really, type safety and unit tests can let you pick up and avoid errors much earlier in writing your code. Moreover, most IDEs will help you more, since now they will know the type of your variables.

## Perquisites

1. node.js
2. Python 3
3. run `npm install` in the location of this file

## How to use

Write your `.ts` files in the folder according to expected output file. If you want to add a subdirectory, see [adding a subdirectory](#adding-a-subdirectory). Once you are done, I recommend creating tests in the `Source/Modules/Tests` folder, using jest, with `.tests.ts` or `.test.ts` extension.

If you want to use proxies for other objects (history, info, etc.), leave their files in `Source/Modules`. This way they won't be transpiled with the things you want to.

Once you are done, you can run tests with `npm test`, and transpile with `npm run build`.
If `Source/build` directory will not be created, or will be empty, but `Source/build-intermediate` will have `.js` files inside, you can manually run `combine files.py`. You may have to run it as administrator/root.

## Known issues

-   When using `export default`, file name must be the exactly the same (case dependent) as exported element.

## Adding a subdirectory

If you want to add a subdirectory for, let's say, commands, you have to include it into Python script by:

1. Call `combineFilesInPath` under other calls in `main`
2. Append it to another file

If you want to see an example made by me, `combine_files_example.py` shows how I added Input Modifier/Commands and inserted it to the beginning of the end file.

## MIT License

Copyright 2023 Gutek8134

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
