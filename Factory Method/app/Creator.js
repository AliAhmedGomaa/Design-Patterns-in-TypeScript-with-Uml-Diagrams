"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
var Rabbit_1 = require("./Rabbit");
var cat_1 = require("./cat");
var Dog_1 = require("./Dog");
var Creator = /** @class */ (function () {
    function Creator(type) {
        this.type = type;
        this.type = type;
    }
    Creator.prototype.create = function () {
        switch (this.type) {
            case 0:
                this.animal = new cat_1.Cat;
                break;
            case 1:
                this.animal = new Dog_1.Dog;
                break;
            case 2:
                this.animal = new Rabbit_1.Rabbit;
                break;
        }
        return this.animal;
    };
    return Creator;
}());
exports.Creator = Creator;
