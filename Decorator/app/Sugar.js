"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sugar = void 0;
var Sugar = /** @class */ (function () {
    function Sugar(bv) {
        this.bv = bv;
    }
    Sugar.prototype.cost = function () {
        return this.bv.cost() + 3;
    };
    return Sugar;
}());
exports.Sugar = Sugar;
