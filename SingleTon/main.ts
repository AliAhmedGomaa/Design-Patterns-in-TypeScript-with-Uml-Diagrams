
import {BankAccount} from './SigleTon';

const acc1 = BankAccount.getInstance();
acc1.deposit(500);

const acc2 = BankAccount.getInstance();
acc2.withdraw(200);


acc1.deposit(1000);
console.log(acc2.getBalance());
console.log(acc1.getBalance());