//Create html element
var divEl = document.createElement("div");
//add/append element to body
document.body.appendChild(divEl);
//create content 
var textData = document.createTextNode("Some Content");
//add content to element
divEl.appendChild(textData);
//set attribute
divEl.setAttribute("id","idname");
//divEl.remove()

//Read element by id
var readById = document.getElementById("idname");

//get inner html
console.log(readById.innerHTML);

//set/update with innerHTML
var name = "Java Script";
//readById.innerHTML += "<p> Welcome to "+ name +" </p>";

//Template literals
readById.innerHTML += `<p> Welcome to ${name} learning </p>`