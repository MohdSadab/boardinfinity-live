// event 
// javascript ( single threaded  event based)


//  event propogation (how event is travel)

//  event bubling (default used by modern browser) if we click any element then it will propogate to it's root and if find same attached event with the current target then it will execute it
//  event capturing (reverse of bubling)

function eventDetail(event,msg){
    // console.log(event);
    // console.log(event.target,">>>")
    // event.stopPropagation()
    // event.target.innerText = 'I am updated' 

    console.log(msg)
}

function appendMessage(msg) {

    // const elem = document.createElement('div')
    // elem.style.color ='red';
    // elem.innerText=msg;
    console.log(msg)
    const msgs = document.querySelector('.msg');
    msgs.style.color='red';
    msgs.innerText+=msg+"\n";  
}


function validateform(event) {
    event.preventDefault();
    console.log("validateform called")
    const msgs = document.querySelector('.msg');
    msgs.innerText='';
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#passw').value;
    let valid=true;
    if(username.length<1){
        appendMessage('User name must be non empty')
        valid=false;
    }
    if(password.length<6){
        appendMessage('password must be six character')
        valid=false;
    }

    return valid;

}

// const elems = document.querySelector(".event-capturing-1")
// elems.addEventListener('click',(event)=>eventDetail(event, 'i am root'),{capture:true})

// const elems2 = document.querySelector(".event-capturing-2")
// elems2.addEventListener('click',(event)=>eventDetail(event, 'i am child'),{capture:true})

// synchronous means line by line execution

//  asynchronous example (uses event loop )
// console.log(' i am first ')

// setTimeout(function () {
//     console.log(' i am second ')
// },100)

// setTimeout(function () {
//     console.log(' i am third ')
// },100)

// console.log(' i am last ')

// printing above output in correct order

// contain problem callback hell
// setTimeout(function () {
//     console.log(' i am first ')
//     console.log(' i am second ')
// setTimeout(function () {
//                 console.log(' i am 7th')
//                 console.log('i am 8th')
//             },100)
//     setTimeout(function () {
//         console.log(' i am third ')
//         console.log('i am 4th')
//         setTimeout(function () {
//             console.log(' i am 5th')
//             console.log('i am 6th')
//             setTimeout(function () {
//                 console.log(' i am 7th')
//                 console.log('i am 8th')
//             },100)
//         },100)
//     },100)
// },1000)

// promise come to resolve above issue
// promise is an object 
//  contains 3 state => pending, resolved, reject

function returnPromise(params) {
    
    return new Promise((resolve,reject)=>{
        console.log("pending")
        setTimeout(function () {
            console.log(' i am first ')
            console.log(' i am second ')
            resolve(' i am resolved')
            // reject(' i am rejected')
        },1000)
    })
}


// returnPromise().then(data=>{
//     console.log(data,">>>>");
//     return returnPromise()
// }).then(data=>{
//     console.log(data,">>> 2");
//     return returnPromise()
// }).then(data=>{
//     console.log(data,">>> 3"); 
// }).catch(error=>{
//     console.error(error);
// })


// async await 

// async function  printSyncronouslyViaAsync(params) {

//     try {

//     const data1= await returnPromise();
//     console.log(data1)
//     const data2= await returnPromise();
//     const data3= await returnPromise();
//     const data4= await returnPromise();
//     const data5= await returnPromise();
//     console.log(data2,data3,data4,data5)
        
//     } catch (error) {
//         console.log(error);
//     }
    
    
// }

// printSyncronouslyViaAsync()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


const fetchData=async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    data.forEach(element => {
        appendMessage(element.title)
    });

}

fetchData()

