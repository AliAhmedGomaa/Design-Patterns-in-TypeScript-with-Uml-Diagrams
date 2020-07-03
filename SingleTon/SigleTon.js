"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.amount = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.amount += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.amount -= amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.amount;
    };
    BankAccount.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new BankAccount();
        return this.instance;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
