"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command(reciever) {
        this.reciever = reciever;
    }
    Command.prototype.execute = function () {
        this.reciever.On();
    };
    Command.prototype.unexecute = function () {
        this.reciever.Off();
    };
    return Command;
}());
exports.Command = Command;
