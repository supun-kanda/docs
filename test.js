/**
 * 
 * @param {Number} num any number 
 * @param {String} str any String
 * @description This will be the master object of this tutorial. As in there's will not be any error handling to input differnet parameter types. The main goal is to show that the methods of inheriting
 */
let Master = function(num,str){
    this.num = num
    this.str = str
}
/**
 * @description Adding properties to inherit outside the function
 * 
 */
Master.prototype.print = function(){
    console.log('\n\nValues\n\tnumber:%d\n\tstring:%s',this.num,this.str);
}
Master.prototype.duplicate = function(){
    return new this.constructor(this.num,this.str);
}

a = new Master(1,'Hi');
a.print()

console.log("a is a Master:",a.duplicate() instanceof Master);

/**
 * 
 * @param {Number} num any number 
 * @param {String} str any String
 * @param {Function} func any function
 * @description The properties are binded using Master by pointing Child1 object to set values except new parameter function. 
 */
let Child1 = function(num,str,func){
    Master.call(this,num,str);
    this.func = func;
}

/**
 * @description To use Masters methods which initiated outside (inherit) Master's prototype copy is taken into Child1 object. And to constructor changes with that prototype assignment to Master. So it has to be again named to Child1. If you did not get what that means, If constructor line wasn't there, the output of line 49 will be false. In other words  "duplicate of b is not an instanceof Child1"
 */
Child1.prototype = Object.create(Master.prototype)
Child1.prototype.constructor = Child1;

b = new Child1(3,4,a.print);
b.print()

console.log("a is a Master:",b.duplicate() instanceof Master)
console.log("b is a Child1:",(b.duplicate() instanceof Child1));

/**
 * @extends Master a subclass of Master by definition
 * @description So basically. All the effort had been done previously has been done automatically. Which are, the prototype methods outside are already inherited now.
 */
class Child2 extends Master{
    /**
     * 
     * @param {Number} num any number 
     * @param {String} str any String
     * @param {Function} func any function
     * @description In here, The super method uses instead of call previously so that both call and bind will be happen special to classes.
     */
    constructor(num,str,func){
        super(num,str);
        this.func = func
    }
}

c = new Child2(11,'Class',b.print);
c.print()

console.log("c is a Master:",c.duplicate() instanceof Master)
console.log("c is a Child2:",c.duplicate() instanceof Child2)
