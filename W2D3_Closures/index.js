// 1.

var add = (

function(){

  var counter = 0;

  return {

    add: function(){return counter += 1},

    reset: function(){return counter = 0},

    }

})();

/* 2.

The free variable is counter.

A free variable is a variable defined outside a given scope and it can be manipulated inside that scope, for example:  the variable counter is defined outside the inner return anonymous function and is modified inside that function.

3.*/
function make_adder(){

var counter = 0;

return function(inc){counter += inc;}

}

let add5 = make_adder(5);

add5(); add5(); console.log(add5());

/* 4.

Add them to a function scope.

 5. */

let empObj = function(){

let name = 'jon';

let age = 50;

let salary = 5000;

let getName = function(){return name;};

let getAge = function(){return age};

let getSalary = function(){return salary};

return {

setName: function(name){this.name = name},

setAge: function(age){this.age = age},

setSalary: function(salary){this.salary = salary},

increaseSalary: function(percentage){this.salary *= (1+percentage)},

incrementAge: function(){this.age = getAge() + 1}

}

}

// 6.

empObj().setAddress =function(){this.address =  '1000 4th N St, Fairfield, IA';}

empObj().getAddress = function(){return this.address;}

// 7.

var me = {
  first: 'Josh',
  last: 'Splinter',
  getFullName: function() {
    return this.first + ' ' + this.last;
  }
};

var you = {
  first: 'William',
  last: 'Smith'
};

console.log(me.getFullName.apply(you));

console.log(me.getFullName.call(you));

let meFullName = me.getFullName.bind(you)

console.log(meFullName());

