function welcome(){
    console.log("event fired")
}

let btn = document.getElementById("btn");

//btn.onclick = welcome;
function parentFunc(ev){
    //ev.stopPropagation();
    //console.log(ev.target)
    console.log(ev.currentTarget);
    // console.log("parent function")
}
function childFunc(ev){
    ev.stopPropagation();
    console.log("child function")
}
function processOne(ev){
    if(false){
        ev.stopImmediatePropagation();
    }
    console.log("process One")
}
function processTwo(){
    console.log("process two")
}

function ancFunc(event){
    event.preventDefault();
    console.log("event fired on Anchor ")
}

let p1 = document.getElementById("parent1");
let p2 = document.getElementById("parent2");
let c1 = document.getElementById("child1");
let c2 = document.getElementById("child2");
let anc = document.getElementById("anc");

anc.addEventListener("click", ancFunc);


p1.addEventListener("click", parentFunc);

// c1.addEventListener("click", childFunc);
// c1.addEventListener("click", processOne);
// c1.addEventListener("click", processTwo);

// p2.addEventListener("click", parentFunc, true);
// c2.addEventListener("click", childFunc, true);





















