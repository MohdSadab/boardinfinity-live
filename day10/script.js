//  es6 class based inhertitance (prototypal inheritance)
//  es6 class is the blue print of an object(eg: architecture draw a blue print of building)
// class Polygon{

//     static count = 0;
//     // used for initialization of an object
//     constructor(height,width){
//         if(Polygon.count<1){
//             this.height = height;
//             this.width = width;
//             Polygon.count+=1;
//         }else{
//             throw new Error('Only single instance is allowed')
//         }
        
//     }

//     // method of the class instance
//     // access by it's instance 
//     area(){
//         return this.height* this.width;
//     }

// }

// class Square extends Polygon{

//     constructor(height,width){
//         super(height,width);
//     }
// }



// // const square = new Square(30,30);
// // square.width=40;
// // square.height=40;
// // const square2 = new Square(30,30);
// // console.log(square);
// const polyg= new Polygon(10,20);
// const polyg2= new Polygon(20,20);
// // const polyg3= new Polygon(20,20);
// // polyg.area();
// // console.log(polyg.area(),polyg2.area())
// console.log(Polygon.count);

// it inherited Array object base object
// let arr=[];
// console.log(arr);
// console.log(arr.__proto__,Array.prototype)
// console.log(arr.__proto__.__proto__,Object.prototype)
// console.log(arr.__proto__.__proto__.__proto__)
// arr.push(10);
// console.log(arr);

// function add(){

// }

// console.log(add.__proto__.__proto__,Object.prototype);

// let basePerson={
//     name: "xyz",
//     age:20,

//     intro:function(){

//         console.log(`hello ${this.name} age is ${this.age}`);
//     }
// }

// let person2={
//     name:"Sadab"
// }


// basePerson.intro();
// person2.__proto__ = basePerson;
// // Object.setPrototypeOf(person2, basePerson)

// person2.intro()
// console.log(person2,basePerson);

// let string = new String("test");
// let string2 = new String("djdjdjjdjdmd");

// String.prototype.capitalize=function(str){
    
//     return this[0].toUpperCase()+this.slice(1);
// }

// console.log(string.capitalize(),string2.capitalize());
// console.log(string,">>>");

// constructor is a normal function called via using new keyword
function Person(name,age){

    this.name = name ;
    this.age= age;

}


// calling the constructor using new keyword
// const p1 = new Person("Sadab", 23);
// const p2 = new Person("Sadab", 25);
// Person.prototype.getIntro=function(){

//     console.log(this.name +" "+ this.age);
// }

// console.log(p1)
// // p1.getIntro=function(){

// //     console.log(this.name +" "+ this.age);
// // }

// p1.getIntro();

// p2.getIntro();

// DomOperation ()
// person  (age,name,address)
// student (college,course, grade, subjects, schoolfee, paid, history)
// teacher (college,course, hour, salary )
// principle ()

//  call apply bind ( this key word refrence)

"use strict";
let obj={

    name:"Hello",
    intro:function(age,country){
        // console.log(this)
        console.log(this.name,age,country);
    }
}


let obj2={
    name:"Sadab"
}

// call is a function which takes first argument as a this refrence and remaing args are function arguments
obj.intro.call(obj2,25,"India")

//  apply similar to call diffrence in we pass array as function args
obj.intro.apply(obj2,[25,"India"])


// bind is similar to (call or bind) except bind returns a function which we can call later
let result = obj.intro.bind(obj2,25,"India");

result();
console.log(result,">>>>callbacjk")

// console.log(obj.intro.call);
// let result=obj.intro;
// callBack();