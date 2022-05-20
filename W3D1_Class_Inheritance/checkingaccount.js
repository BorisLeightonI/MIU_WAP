class CheckingAccount extends Account{
    constructor(number,overdraft_limit){
        super(number);
        this.overdraft_limit = overdraft_limit;

    }
    set overdraft_limit(value){
        this.overdraft_limit = value;
    }
    get overdraft_limit(){
        return this.overdraft_limit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance+this.overdraft_limit) {
            throw Error("Exceeded limit");
        }
        this._balance -= amount;
    }
    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance + ': limit ' + this.overdraft_limit;
    }
    endOfMonth(){
        if(this.getBalance<=0){
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this.getBalance} overdraft limit: ${this.overdraft_limit}`;
        }
        return `CheckingAccount ${this._number}: balance: ${this.getBalance} overdraft limit: ${this.overdraft_limit}`;
    }

}