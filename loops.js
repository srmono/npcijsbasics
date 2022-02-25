let a = 0;
// while 
// while( a <= 10){
//     console.log(a);
//     a++
// }

// do while 
// do{
//     console.log(a);
//     a++
// }while( a > 10);

// for 
// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

var tools = ["js","html","css","java","springboot","mysql"];
// var toolsLenght = tools.length;
// for ( var i = 0; i < toolsLenght; i++){
//     console.log(tools[i])
// }

// for of
// for (tool of tools) {
//     console.log(tool);
// }

// for in 
// for(idx in tools){
//     console.log(tools[idx])
// }

//for in with object
let product = {
    brand: "MI",
    cat: "electronics",
    price: 47778,
    color: "Black"
}

for(key in product){
    console.log(key, " - " ,product[key])
}
