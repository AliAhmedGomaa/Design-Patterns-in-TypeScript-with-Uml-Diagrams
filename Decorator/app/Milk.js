"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Milk = void 0;
var Milk = /** @class */ (function () {
    function Milk(bv) {
        this.bv = bv;
    }
    Milk.prototype.cost = function () {
        return this.bv.cost() + 3;
    };
    return Milk;
}());
exports.Milk = Milk;
