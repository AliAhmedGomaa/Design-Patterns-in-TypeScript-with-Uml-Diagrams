export class BankAccount {
    private amount: number = 0;
    private static instance: BankAccount;

    private constructor() { }

    deposit(amount: number) {
        this.amount += amount;
    }


    withdraw(amount: number) {
        this.amount -= amount;
    }

    getBalance() {
        return this.amount;
    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new BankAccount();
        return this.instance;
    }
}



