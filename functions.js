function welcome(){
    console.log("This is my first function");
}

//welcome();
let test = welcome;

function calc(a,b){
    var total = a + b;
    return total;
}

// calc(2,4)
// 6
// calc(2,4,8,9,9)
// 6
// calc(2)
// NaN
// 3 + undefined
// NaN

function totalCart(){
    //console.log(arguments)
    let total = 0;
    for(x of arguments){
        total += x;
    }
    return total;
}

function returnAfter(){
    return "this is return statement";
    console.log("After Return Statement");//doesn't execute 
}


// (function(name){
//     console.log(name)
// })("venkat")

// hoisting 

//testOne();
function testOne(){
    console.log("test One")
}

//testTwo()
var testTwo = function(){
    console.log("Test two")
}

testTwo();

