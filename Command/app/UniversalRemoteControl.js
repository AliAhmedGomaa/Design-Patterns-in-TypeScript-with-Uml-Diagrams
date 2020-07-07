"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalRemoteControl = void 0;
var UniversalRemoteControl = /** @class */ (function () {
    function UniversalRemoteControl(command) {
        this.command = command;
    }
    UniversalRemoteControl.prototype.turOn = function () {
        this.command.execute();
    };
    UniversalRemoteControl.prototype.turOff = function () {
        this.command.unexecute();
    };
    return UniversalRemoteControl;
}());
exports.UniversalRemoteControl = UniversalRemoteControl;
