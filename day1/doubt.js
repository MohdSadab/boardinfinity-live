// var items = [
//     { name: 'Edward', value: 21, age:10 },
//     { name: 'Sharpe', value: 37, age:40 },
//     { name: 'And', value: 45, age:10 },
//     { name: 'The', value: -12, age:50 },
//     { name: 'Magnetic', value: 13, age:14 },
//     { name: 'Zeros', value: 37, age:17 }
// ];


// items.sort((first,sec)=>{
//     const a= first.value + first.age; //31
//     const b= sec.value + sec.age;   // 77  
//     if (a>b) {
//         return -1;
//     }
//     if (a<b) {
//         return 1;
//     }
//     //a-b<0
//     return 0;
// })

// // javascript lambda function
// const funcName = (param,param2) => param + param2

// const funcName2=(param,param2)=>{
//     return param+param2;
// }

// console.log(typeof(items))

// // type of (done)
// // instance of (done)
// // type conversion (done)
// // function
// // scope
// // let 
// // const
// // number
// // string
// // array
// // object
// // map 
// // set
// // destructuring
// // spread
// // rest

// // data type => primitive , non primitive, pass by value

// // primitive => immutable (can't be update ) 
// //  non-primitive (object (array,list,obj etc))=> mutable (can update, pass by refrence)

// var str = "Testing";
// const arr= [...str]; //...str is used only for iterateble object
// arr[0]='p';
// const newStr=arr.join('');
// console.log(newStr);


// function myNewObj(obj){
//     return {...obj,a:5}
// }


// function myOldObj(obj){
//     obj.a=5;
// }

// const obj={'c':6};
// // obj=myNewObj(obj);
// myOldObj(obj);
// console.log(obj);
// let obj2 = {'c':6}
// obj2=myNewObj(obj2)
// console.log(obj2)
// // str[0]="P";
// // // Pesting or Testing
// // console.log(str,typeof(str));

// // const obj={
// //     a:'test',
// //     b:2
// // }

// // obj.b=3;

// // console.log(obj);

// // parseInt parseFloat data type conversion

// // ==  (compaire only values)
// // === (compaire values and type) strict compairison

// // let num= "12.12";
// // +num;  //type conversion  primim=tive data type is immutable so it is not changing above need to store this

// // console.log(num);
// // console.log(typeof(num),typeof(parseInt(num)));
// // console.log(parseInt(num),parseFloat(num),+num);


// // anonymous function
// var a=function (a,b){
//  return a+b;
// }

// // normal function
function b(a,b){
    console.log(a+b);
    return a+b;
}
// b(5,6);
//  javascript function used as a first class function

//  first class function => we can use function as we used variable we can assign we can pass we can return the function

function callAnyFunction(str,callback){
    console.log("hello ",str,typeof(callback),callback);
    callback(6,7);
}


// callAnyFunction("callback function", b);

// callAnyFunction("direct calling function", 15);

// const c =(a,c)=>{
//     console.log(a,c)
//     b(2,3);  
// } 
// callAnyFunction("assing value to variable and passing it",c);


const fun1 = function(a){

    return function(b){
        return a*b;
    }
}

//  fun1 is a function that returns 
//  const arr=[1,2,3,4,5,6,7,8,9];

// const multiplyBy2=fun1(2);
// const multiplyBy3=fun1(3);

// for(let i of arr){
//     console.log(multiplyBy2(i));
//     console.log(multiplyBy3(i));
// }

// // recursion => function calling it self must have termination condition

// function printLessThen10(num){

//     console.log(num);
//     num++; // num=num+1 ++num
//     // termination condition
//     if(num>5)
//     return;
//     printLessThen10(num); 
// }

// printLessThen10(0)


const arr=[2,5,6,3,4,9,7,10];


// how to access element => arr[0];

// function printArrRecu(lenArr,i) {
//     console.log(arr[i]);
//     if(i>lenArr-1)
//         return;
    
//     printArrRecu(lenArr, i+1) // ++i 
// }

// printArrRecu(arr.length,0);
// let num=0;
// // console.log(num++,++num);
// //= ++
// // 1+2*3+4 => 13, 11 
// // 1,1 0,1 1,-1 0,2 1,2;
// let temp=num++;

// // temp=0;
// // num=1;
// // temp -= num;

// // temp=temp-num;
// temp=temp+ ++num + num++;

// console.log(temp,num);

//3 , 2, 2, 2

// scope in javascipt 
// 1-> global 
// 2-> local (functional level, block level)
//  var (functional level scope we can't access the variable which is defined inside the function , outside the function   )
//  hoisting
// var myFun;
// console.log(a);
// var a=10;

// console.log(myFun,myFun2);

// myFun=function(params) {
//     console.log("KKSKSK")
// }


// function myFun2(params) {
//     console.log("KKSKSK")
// }


// function temp(){
//   var  functionScope=10;
// }
// temp();
// console.log(functionScope);

// {
//     let blocLevel=10;
// }

// console.log(blocLevel);

// for(var i=0;i<5;i++){

// }


// javscript -> asynchronous event driven architecture

// function  asynChronous() {
//     setTimeout(()=>{
//         console.log("I am first")
//     },500)

//     setTimeout(()=>{
//         console.log("I am second")
//     },500)

//     console.log("I am third");
    
// }


// asynChronous();

let person={
    name:"sadab",
    address:{
        country:"india",
        state:"U.P"
    },
    age: 25,
    hobeis:["cricket","coding","engaging with friends"]
}

// person.name="test"

// console.log(person);

// destructuring
// const {name,address:{state},age,hoobeis}=person;

function smartFunc({name,address,hobeis}) {
    // console.log(name,address)
    name="test"
    address.name="kamran"
    hobeis.pop();
}

smartFunc(person)
console.log(person.address,person.hobeis);



