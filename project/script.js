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
// question list
// random question (user see the question at most once)
// track the history of user marked answer
// in last you need to print which answer is correct and wrong 
// each question have a timeout 60 second on mark answer move to next and start time again
// if 60 second pass then next question will come
// load the question from api 

// [
//     {
//         "queId":1,
//         "question":"shhdhd",
//         "answer":[
//             {
//                 "id":1,
//                 "value":"sjjs"
//             }
//         ],
//         "correct":1
//     },
//     {
//         "queId":1,
//         "question":"shhdhd",
//         "answer":[
//             {
//                 "id":1,
//                 "value":"sjjs"
//             }
//         ],
//         "correct":1
//     },
//     {
//         "queId":1,
//         "question":"shhdhd",
//         "answer":[
//             {
//                 "id":1,
//                 "value":"sjjs"
//             }
//         ],
//         "correct":1
//     },
//     {
//         "queId":1,
//         "question":"shhdhd",
//         "answer":[
//             {
//                 "id":1,
//                 "value":"sjjs"
//             }
//         ],
//         "correct":1
//     }
// ]

// const history=[
//     {
//         questionId:1,
//         status: ("marked"/"skip"/"timeout"),
//         answerId: 1
//     }
// ]

// Storage.addItem({'id':1,"title":"i am to do 1"})
// Storage.addItem({'id':1,"title":"i am to do 1"})

// let arr=[];
// console.log(Storage.getTodoList())

// quiz app
// UI
// storage

// user create todo (startDate , endDate)
/**
[
{
    "study":[
        {
            "id":1,
            "title":"My first todo",
            "status":"pending/completed"
        }
    ],
    "startDate":"",
    "expiredAt":"",
    "status":"pending/completed/expired"
},
{
    "name":""
    "items":[
        {
            "id":1,
            "title":"My first todo",
            "status":"pending/completed"
        }
    ],
    "startDate":"",
    "expiredAt":"",
    "status":"pending/completed/expired"
}
]
 */


// const elem = UI.createElement('div', 'Hello World',{'class':'mt-5 container','id':'list'})
// const elem2 = UI.createElement('div', 'Hello Worldsdhdhhd',{'id':'list'})
// const elem3 = UI.createElement('div', 'Hello World djdjdjjd',{'id':'list'})
// UI.appendToParent(document.getElementById("root"), elem)
// UI.appendToParent(document.getElementById("root"), elem2)
// UI.appendToParent(document.getElementById("root"), elem3)


class UI {
    // instance will not creted

    // {class:"mt-5 form-control",id:"1"}
    static createElement(type, innerHtml, attributes = {}) {
        const elem = document.createElement(type);
        if (innerHtml) {
            elem.innerHTML = innerHtml;
        }

        // [class,id,src]
        //    attributes= {
        //         "class":"mt-5",
        //         "id":"mt",
        //    }
        //    [class,id].
        //   <div class="id"></div>
        Object.keys(attributes).forEach(key => {
            elem.setAttribute(key, attributes[key])
        })
        return elem;
    }

    static appendToParent(parent, elem) {
        parent.appendChild(elem)
    }

    static removeElement(selector) {
        const elem = document.querySelector(selector);
        if (elem)
            elem.remove();
    }

    static addEventListener(selector, cb) {
        const elem = document.querySelector(selector);
        if (elem) {
            elem.addEventListener('click', cb)
        }
    }

    static removeEventListener(selector, cb) {
        const elem = document.querySelector(selector);
        if (elem) {
            elem.removeEventListener('click', cb)
        }
    }

    static getElement(selector) {
        return document.querySelector(selector)
    }
}

class Storage {

    // insert
    static key = 'todos'
    static doneKey = 'doneTodo'
    static addItem(item, key = Storage.key) {
        // localstorage we can not store anything except string
        let prevItem = Storage.getTodoList(key);
        prevItem.push(item);
        prevItem = JSON.stringify(prevItem)
        localStorage.setItem(key, prevItem);

    }

    static getTodoList(key = Storage.key) {
        const items = localStorage.getItem(key)
        return JSON.parse(items) || []
    }

    static clearTodoList() {
        localStorage.clear()
    }



}
// document.addEventListener('DOM', listener)

class Todos {

    // help to show the previous data created by the users called when javascript loaded

    static addTodoInRealDom(item) {
        const copyItem = JSON.stringify(item)
        const childElem = `
                             <div class="d-flex justify-content-between me-5 mb-2 ">
                                <h3 class="ms-5 mt-1">${item.name}</h3>
                                <div>
                                <p hidden class="itemDetails">
                                    ${copyItem}
                                </p>
                                    <span class="badge bg-danger">
                                        ${item.status}
                                    </span>
                                    <button class="btn btn-danger ms-2" 
                                            id="todo-delete"
                                            data-val='${item.name}'
                                            >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            
                            `
        const elem = UI.createElement('div', childElem, { 'class': 'todo-item' });
        UI.appendToParent(document.querySelector("#todos"), elem);
    }

    static addDoneTodoInRealDom(item) {
        const copyItem = JSON.stringify(item)
        const childElem = `
                             <div class="d-flex justify-content-between me-5 mb-2 ">
                                
                                <h3 class="ms-5 mt-1">${item.name}</h3>
                                <div>
                                    <p hidden class="itemDetails">
                                        ${copyItem}
                                    </p>
                                    <span class="badge bg-success">
                                        ${item.status}
                                    </span>
                                    <button class="btn btn-danger ms-2" 
                                            id="done-todo-delete"
                                            data-val='${item.name}'
                                            >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            
                            `
        const elem = UI.createElement('div', childElem, { 'class': 'todo-item' });
        UI.appendToParent(document.querySelector("#doneTodos"), elem);
    }

    static listTodos() {

        const todos = Storage.getTodoList(Storage.key);
        todos.forEach(item => {
            Todos.addTodoInRealDom(item)
        })
    }

    static listDoneTodos() {
        const todos = Storage.getTodoList(Storage.doneKey);
        todos.forEach(item => {
            Todos.addDoneTodoInRealDom(item)
        })
    }

    static addTodo() {
        const value = UI.getElement('#todo-input').value;

        const todo = {
            "name": value,
            "items": [],
            "startDate": new Date(),
            "expiredAt": new Date(+new Date() + 60000 * 15),
            "status": "Pending"
        }
        Todos.addTodoInRealDom(todo)
        Storage.addItem(todo)
    }

    static openForm() {
        UI.removeElement('#addTodoForm')
        // it is optimization 
        UI.removeEventListener('#submit', Todos.addTodo)
        const innerHtml = `
            <div class="mx-5">
            <label for="todo-input">Todo</label>
            <input type="text" placeholder="Name"  id="todo-input" class="form-control my-3 "/>
            <button class="btn btn-primary" id="submit">Add</button> 
            </div>
        `
        const elem = UI.createElement('div', innerHtml, { id: "addTodoForm" })
        UI.appendToParent(document.querySelector("#root"), elem)
        UI.addEventListener('#submit', Todos.addTodo)
    }


    static removeTodo(name,key=Storage.key) {
        // filter returns new array;
        let arr = Storage.getTodoList(key).filter(function (item) {
            return item.name !== name
        });
        arr = JSON.stringify(arr);
        localStorage.setItem(key, arr);
    }

    static deleteTodo(event) {
        const target = event.target;
        if (target.getAttribute("id") === "todo-delete") {
            target.parentElement.parentElement.remove();
            Todos.removeTodo(target.getAttribute('data-val'))
        }
        else if (target.getAttribute("id") === "done-todo-delete") {
            target.parentElement.parentElement.remove();
            Todos.removeTodo(target.getAttribute('data-val'),Storage.doneKey)
        }
        else if (target.getAttribute('class') && target.getAttribute('class').includes('badge')) {
            const item = JSON.parse(target.parentElement.querySelector('.itemDetails').innerText)
            target.parentElement.parentElement.remove();
            const key = target.getAttribute('class').includes('bg-success')? Storage.doneKey : Storage.key
            Todos.removeTodo(item.name,key)
            item.status = key=== Storage.doneKey? 'pending' : 'done'
            const addKey = key=== Storage.doneKey? Storage.key: Storage.doneKey
            Storage.addItem(item, addKey)
            if(addKey===Storage.doneKey)
                Todos.addDoneTodoInRealDom(item)
            else
                Todos.addTodoInRealDom(item)
        }
    }


}

window.addEventListener('load', (event) => {
    Todos.listTodos();
    Todos.listDoneTodos();
})

