// this key word in javascript

// by default this represent global context in non strict mode;
// console.log(this)

// function normalFUnc(a,b,c){
//     console.log(arguments)
//     console.log(this);
// }



// set this to global object
// normalFUnc(10,20,30);

// let obj={
//     firstName:"Mohd Sadab",
//     getIntro:function(){
//         return this
//     }
// }

// first method
// console.log(obj.getIntro());

// const temp = obj.getIntro;
// // reset this global context
// console.log(temp());


// var obj = {
//     count : 10,
//     doSomethingLater : function(){
//         // The traditional function binds "this" to the "obj" context.
//         // let context=this
//         setTimeout( ()=>{
//             // Since the arrow function doesn't have its own binding and
//             // setTimeout (as a function call) doesn't create a binding
//             // itself, the "obj" context of the traditional function will
//             // be used within.
//             this.count++;
//             console.log(this.count,this);
//         }, 300);
//     }
// }

// obj.doSomethingLater()


// function the one who cause call the function this refer to that element/obj/window

let count=0;
function getName(e){
    console.log(count++,e.target.value,this)
}


// debounce is a function that takes a func and delay as an arguent and returns a new function
//  which can be call

let obj={
    name:"Hello"
}
const debounce =function(callback,delay){
    let timer;
    let context=this
    return function(event){
        clearTimeout(timer);
        console.log(" i am outer", this)
        timer=setTimeout(()=>{
            console.log(" i am inner", this)
            callback.call(this,event)
        },delay)
    }
}

let specialFunc = debounce(getName,300);

specialFunc = specialFunc.bind(obj)
// it gets called again and again we need to maintain a private global variable for this 
// const specialFunc = function(){

//     setTimeout(function(){
//         getName()
//     },300)
// }



// throttling (provides some delay between two function call used in game etc)

// throttling is a function that takes a func and delay as an arguent and returns a new function
//  which can be call


function fire(){

    console.log("fire")
}


// function throttle(callback,delay){
//     let reload =true;
//     return function(...args){
//         if(reload){
//             reload=false
//             setTimeout(()=>{
//                 callback.apply(this,args)
//                 reload=true
//             },delay)
//         }
//     }
// }

function throttle(callback,delay){

    let reload=0;

    return function(...args){

        // save the time when this function called
        const currTime = new Date().getTime();
        if(currTime-reload>delay){
            callback.apply(this,args)

            // save previous time
            reload = currTime;
        }
    }
}


const ak47 = throttle(fire,1000)