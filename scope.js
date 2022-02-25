//global
var a = 10;

function parent(){
    x = 20;
    console.log("global variable from parent method - ", a)

    function child(){
        y = 20; 
        console.log("parent variable - ", x)
        console.log("global variable - ", a)
    }
    child();
    console.log("child variable from parent - ", y)
}