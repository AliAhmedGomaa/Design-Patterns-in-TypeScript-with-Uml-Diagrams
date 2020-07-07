"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refrigirator = void 0;
var Refrigirator = /** @class */ (function () {
    function Refrigirator() {
        this.state = 'Off';
    }
    Refrigirator.prototype.On = function () {
        this.state = 'On';
        console.log('Refrigirator Is ' + this.state);
    };
    Refrigirator.prototype.Off = function () {
        this.state = 'Off';
        console.log('Refrigirator Is ' + this.state);
    };
    return Refrigirator;
}());
exports.Refrigirator = Refrigirator;
