// closure is a way in javascript to create  private variable
// closure is a way in which a fuction can access the value outside it's lexical enviorment

"use strict";


// function increment(){
//     let count=0;
//     return function (val=1){
//         count=count+val;
//         return count;
//     }
// }

// const add = increment();

// console.log(add);
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())

// for(var i=1;i<=5;i++){

//     setTimeout(function(){
//         console.log(i)   
//     },i*1000)

// }

// for(let i=1;i<=5;i++){

//     setTimeout(function(){
//         console.log(i)   
//     },i*1000)

// }

// var url='https://jsonplaceholder.typicode.com/todos/1';
// for(var i=1;i<=5;i++){

//     function print(x){
//         setTimeout(function(){
//             fetch(url)
//             .then(response => response.json())
//             .then(json => console.log(json))
//         },x*1000)
//     }
    
//     print(i);
// }


// sum(1)(2)(3)...(n)()
// 1+2+3+....+n
// sum(5)(7)()  output 12


// sum(5)

// const sum = function(first){
//     return function(second){
//         return function (third){
//             return function(){
//                 return first + second + third;
//              }
//         }
//     }
// }

// const sum = function (first){
//     return function(second){
//         if(!second){
//             return first;
//         }else{
//             return sum(first+second)
//         }
//     }
// }




// sum(5)()

// recursion (function invoking itself with a termination condition is known as recursion)

// console.log(sum(5)(8)(10)(20)())

// sum(5)(8)(10)(20)()
// sum(13)(10)(20)()
// sum(23)(20)()
// sum(43)()

// array filter map reduce ... mutable non mutable refernce concat shallow refrence deep refrence 
// event, event.tagret, this keyword, class , object , function , `shshshs ${sdhhd}`
//  methods array return new array 
//  Object.assign 
// new array 
//  2 array merging 

// quiz app build
// random question (user see the question at most once)
// track the history of user marked answer
// in last you need to print which answer is correct and wrong 
// each question have a timeout 60 second on mark answer move to next and start time again
// if 60 second pass then next question will come
// load the question from api 

[
    {
        "queId":1,
        "question":"shhdhd",
        "answer":[
            {
                "id":1,
                "value":"sjjs"
            }
        ],
        "correct":1
    },
    {
        "queId":1,
        "question":"shhdhd",
        "answer":[
            {
                "id":1,
                "value":"sjjs"
            }
        ],
        "correct":1
    },
    {
        "queId":1,
        "question":"shhdhd",
        "answer":[
            {
                "id":1,
                "value":"sjjs"
            }
        ],
        "correct":1
    },
    {
        "queId":1,
        "question":"shhdhd",
        "answer":[
            {
                "id":1,
                "value":"sjjs"
            }
        ],
        "correct":1
    }


]