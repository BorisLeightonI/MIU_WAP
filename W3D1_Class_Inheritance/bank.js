class Bank{
    static nextNumber = 0;
    static accounts = [];
    constructor(){

    }
    addAccount(){
        accounts.push(new Account(++nextNumber));
        return nextNumber;
    }
    addSavingsAccount(interest){
        accounts.push(new SavingsAccount(++nextNumber).interest(interest));
        return nextNumber;
    }
    addCheckingAccount(overdraft){
        accounts.push(new CheckingAccount(++nextNumber,overdraft));
        return nextNumber;
    }
    closeAccount(number){
        if(number > nextNumber-1) throw Error('non existent account');
        return accounts.splice(number-1, 1);
    }
    accountReport(){
        accounts.forEach(e => console.log(e));
    }
    endOfMonth(){
        accounts.forEach(e => e.endOfMonth());
    }

}