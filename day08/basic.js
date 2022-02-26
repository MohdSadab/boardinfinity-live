// console.log("element by id",document.getElementById("root"))
// console.log("element by classname",document.getElementsByClassName("elem"))
// console.log("element by classname",document.getElementsByTagName("div"))
// console.log("element by querySlector tag", document.querySelector("div"))
// console.log("element by querySlector id", document.querySelector("#root"))
// console.log("element by querySlector id", document.querySelector(".elem"))
// console.log("element by querySlectorAll tag", document.querySelectorAll("div"))
// console.log("element by querySlectorALl id", document.querySelectorAll(".elem"))


let selectedItem ='';

function getInputRef(){
    return document.querySelector("#input")
}


function  createTextNode(val) {
    return document.createTextNode(val)
}

function createLiElem(val){
    //  create a li element
    const li = document.createElement('li');
    
    const textNode = createTextNode(val);
    // add inner text
    // li.innerHTML=val;
    li.appendChild(textNode);

    return li;
}

function addItem(params) {
    // step 1 -> select the input
    const input = getInputRef();

    //  step 2-> get the input value
    const val = input.value;
    
    //  create a li element with text value
    const li = createLiElem(val);

    li.setAttribute('class', val);
    li.setAttribute('style', 'color:red;')
    // select the parent where you want to add created element

    const root = document.querySelector("#root");

    root.appendChild(li);

    input.value='';

    // for update we add event listener
    // li.addEventListener('click', function () {
    //     const value = li.innerText;
    //     input.value = value;
    //     selectedItem = li;
    //     console.log(selectedItem.attributes)
    // })

}



function  updateItem() {

    // step to update item 
    //  1-> select and set the input value
    //  2-> for updation we need to uniquely idefied the element
    selectedItem.innerText= getInputRef().value;
    
}

function  deleteItem() {
    
    selectedItem.remove();
}