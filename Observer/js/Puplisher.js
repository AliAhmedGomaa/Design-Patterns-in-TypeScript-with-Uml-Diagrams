"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.addObserver = function () {
        var _a;
        var subs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subs[_i] = arguments[_i];
        }
        (_a = this.subscribers).push.apply(_a, subs);
    };
    Publisher.prototype.removeObserver = function (subs) {
        var subscriberToRemove = this.subscribers.indexOf(subs);
        this.subscribers.splice(subscriberToRemove, 1);
    };
    Publisher.prototype.notify = function () {
        this.subscribers.forEach(function (subscriber) {
            subscriber.update();
        });
    };
    /////////////
    Publisher.prototype.setState = function (value) {
        this.data = value;
        this.notify();
    };
    Publisher.prototype.getState = function () {
        return this.data;
    };
    return Publisher;
}());
exports.Publisher = Publisher;
