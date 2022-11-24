class Command {
    constructor(commandType) {
        this.commandType = commandType;
    }

    execute() {
        console.log("Execute:", this.commandType);
    }

    undo() {
        console.log("Undo:", this.commandType);
    }
};

class BoldCommand extends Command {
    constructor() {
        super("bold");
    }
}

class ItalicCommand extends Command {
    constructor() {
        super("italic");
    }
}

class UnderlineCommand extends Command {
    constructor() {
        super("underline");
    }
}

class StrikethroughCommand extends Command {
    constructor() {
        super("strikethrough");
    }
}

class ColourCommand extends Command {
    constructor() {
        super("colour");
    }
}

var commandExecutionManager = (function() {
    var commandStack = [];

    function executeCommand(command) {
        command.execute();
        commandStack.push(command);
    }

    function undoCommand() {
        if(commandStack.length == 0) {
            console.log("No more commands to undo.");
            return;
        }
        var command = commandStack[commandStack.length-1];
        commandStack.splice(commandStack.length - 1, 1);
        command.undo();
    }

    return {
        commandStack: commandStack,
        executeCommand: executeCommand,
        undoCommand: undoCommand
    }
})();

console.log("Command execution manager: ", commandExecutionManager);

commandExecutionManager.executeCommand(new BoldCommand());
commandExecutionManager.executeCommand(new UnderlineCommand());
commandExecutionManager.executeCommand(new ItalicCommand());

console.log("Command execution manager: ", commandExecutionManager);

commandExecutionManager.undoCommand();
console.log("Command execution manager: ", commandExecutionManager);

commandExecutionManager.undoCommand();
console.log("Command execution manager: ", commandExecutionManager);

commandExecutionManager.executeCommand(new StrikethroughCommand());
commandExecutionManager.executeCommand(new ColourCommand());
commandExecutionManager.executeCommand(new UnderlineCommand());

console.log("Command execution manager: ", commandExecutionManager);
commandExecutionManager.undoCommand();
commandExecutionManager.undoCommand();
commandExecutionManager.undoCommand();
commandExecutionManager.undoCommand();
console.log("Command execution manager: ", commandExecutionManager);
