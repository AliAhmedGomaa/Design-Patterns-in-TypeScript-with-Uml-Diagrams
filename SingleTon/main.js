"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SigleTon_1 = require("./SigleTon");
var acc1 = SigleTon_1.BankAccount.getInstance();
acc1.deposit(500);
var acc2 = SigleTon_1.BankAccount.getInstance();
acc2.withdraw(200);
acc1.deposit(1000);
console.log(acc2.getBalance());
console.log(acc1.getBalance());
