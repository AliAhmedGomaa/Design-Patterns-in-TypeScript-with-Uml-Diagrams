"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lamp = void 0;
var Lamp = /** @class */ (function () {
    function Lamp() {
        this.state = 'Off';
    }
    Lamp.prototype.On = function () {
        this.state = 'On';
        console.log('Lamp Is ' + this.state);
    };
    Lamp.prototype.Off = function () {
        this.state = 'Off';
        console.log('Lamp Is ' + this.state);
    };
    return Lamp;
}());
exports.Lamp = Lamp;
