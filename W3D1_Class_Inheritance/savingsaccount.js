class SavingsAccount extends Account {
    constructor(number){
        super(number);
        let interest = 3;
    }

    set interest(value){
        this.interest = value; 
    }
    get interest(){
        return this.interest;
    }
    addInterest(){
        this.deposit(this.getBalance()*this.interest/100);
    }
    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance;
    }
    endOfMonth() {
        return `Interest added SavingsAccount ${this._number}: balance: ${this.getBalance()} interest: ${this.interest}`; 
    }
}