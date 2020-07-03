"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
var Subscriber = /** @class */ (function () {
    function Subscriber(publisher) {
        this.publisher = publisher;
    }
    Subscriber.prototype.update = function () {
        console.log('Iam Notified');
        console.log('New Number Is ' + this.publisher.getState());
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
