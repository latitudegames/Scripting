# AIDECLib
My goal with **AIDECLib** (the AI Dungeon Extensive Command Library) and the **AIDECreator** (what I nicknamed the Jupyter notebook to assist in command creation) is to make it not only possible, but actually very viable for people to add custom commands to their scenarios without too much (or even barely any) hassle at all. My job is to do the hard work of making sure your command will function from the get-go so *you* don't have to.

## Explanation of What This Is
AIDECLib (and the assisting AIDECreator) exist to facilitate the easy scripting of powerful AI Dungeon commands. You *do* obviously still have to do some of the JavaScript yourself, but I'm hoping to even make some of that easier by providing some basic command templates (and maybe semi-premade classes) later to speed along development.

In very simple terms, I just made it very easy for you to add commands to your AI Dungeon scenarios. You're welcome.

I'm also planning on making an option to download a script file you can directly upload to AI Dungeon, so you have to do as little interaction as possible; however, I'll still keep original options in place when I do so for those who will be suspicious of anything foreign to their computer.

# Using AIDECLib
## Creating a Command
#### The parameters for the `Command()` constructor.
*   `name` - This represents the name of the command, and will be what users input to run your command. Valid names must satisfy the regular expression `[\w\d-_]+`. In addition, names are case insensitive to provide ease of implementation. While not strictly necessary, it's advised you make these names compliant with similar standards to Python's [PEP 8 function and variable naming conventions](https://www.python.org/dev/peps/pep-0008/#function-and-variable-names), except that it is encouraged to use hyphens over underscores if you need to use one or the other.
*   `usage` - The usage string / signature of your command. For those without a background in creating command line programs, this usually takes the format of `Usage: {name} <arguments>...`. For example, `Usage: greet <user>` for a command named "greet" with an argument of "user". For more information on this formatting style, see the **Usage patterns** section [here](http://docopt.org/).
*   `description` - This is the docstring of your command. The first sentence of it will also be displayed alongside the command name when the pre-defined help command is run.
*   `callback` - This is your actual command function. the arguments to the command are passed to the callback function as an array of strings, so it's up to the callback to convert them into the necessary data type. For more information on converting between data types in JavaScript, and also what data types and structures are available, see [this link](https://www.w3schools.com/js/js_type_conversion.asp).
*   `predicate` - This is the function used to determine whether or not the arguments given are valid for your command. This function can be as complex or as simple as desired. The default behavior is to assume that all arguments are correct without checking them, so commands that do not specify a predicate are still functional. Even so, it is heavily recommended that you implement a predicate. When the predicate fails (by returning any value with a boolean evaluation of `false`), the command's usage and description will be displayed for the user.
*   `visible` - This is the boolean value for whether or not to show the typed-out command in the output text. Defaults to `true`.

### Special Names
The hidden command naming scheme, while not useful for all developers, will nonetheless be useful to some. Hidden commands (while not technically able to be fully hidden, since users can always look in the adventure's scripts) are hidden from help messages and auto-detection and are therefore far less likely to be discovered by normal users. You can use this to give your scenario some special hidden commands that are like cheat codes or little fun bonuses.

Hidden commands are achieved by prefixing the command name by one or more hyphens (`-`) or underscores (`_`). The command will then be automatically hidden by the command listing utilities in the library.

### Documentation Guidelines
When documenting your commands, you should follow the same specifications as a UNIX command line program. You should have a short description, all arguments should be clearly listed and explained, as well as any more complex aspects of the command being explained in their own sections.

### Callback and Predicate Specifications
Callback functions should accept a single parameter. This parameter will be an array of strings, and contains the full text of the command (with the command prefix removed) and the positional arguments passed to the command. The callback should return a string when complete, which is the text output to be displayed by the command. A sample callback function is shown below.

```js
function greet(args) {
    return `Hello, ${args[1]}!`;
}
```

The predicate function for a command will recieve the exact same arguments as the callback will. The predicate must instead simply determine whether the arguments are of the required number, format, etc. to be parsed by the callback and return `true` or `false` based on this.

### Advanced Callback Usage
If you'd like to implement your own methods of parsing arguments or processing the command in general, the first item in the `args` array passed to the callback is the full text used to invoke the command, sanitized of the AI Dungeon text from each input mode and the command prefix. This allows for the ability to make a simple `echo` command like the one found on most Unix platforms. For example:

```js
function echo(args) {
    return args[0].slice(5);
}
```

This allows for more flexibility with the implementation in other use cases as well. For example, the ability to implement argument parsing based on escapes and context rather than relying on the bootleg parsing present in AIDECLib by default is quite useful. This also allows for implementation of various keyword- / flag-based argument systems, no longer requiring that commands accept solely positional arguments.

### Allowing Users to Run Your Command
As you can see, there are three separate files within AIDECLib. Each of these is representative of a different tab in the AI Dungeon scripting interface. Comments have been placed marking locations to place different parts of your commands, but I feel some of this needs further explanation for anyone not familiar with JavaScript.

To add our demonstration command `greet` to the list of commands that users can run, you need to edit the input modifier like so:

```js
const modifier = (text) => {
  // Make sure state.stop (the temporary version of state.stopped) is false by default
  state.stop = false;

  // Define the persisting stop attribute of state upon starting the adventure
  if (state.stopped == undefined) {
    state.stopped = true;
  }

  // Define the command array
  state.commands = [];

  addCommand(
    "greet",
    "Usage: greet <name>",
    "A command used to say hello to someone.\n\nPositional arguments:\n\t<name>\t\tThe name of the person you want to greet.",
    greet,
  );

  // Parse any commands present in text
  modifiedText = parseCommand(text) || text

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)

```

Note the call to `addCommand()`, and that its parameters are the same as `Command()`; `addCommand()` just does the work of adding your command to the command array for you.
