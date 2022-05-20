window.onload = function(){

/******SavingsAccount******/
const objSavAcc = new SavingsAccount(10);
objSavAcc.deposit(100);

    describe("addInterest", function(){
        it("Adds interests", function(){
            assert.equal(objSavAcc.addInterest(), 3);
        });
    });
    
    mocha.run();
};