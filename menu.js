var menu = ["home", "about", "contact","service"];
let menuEl = document.getElementById("menu");
//menuEl.innerHTML ="";

let output = "<ul>";

for(mel of menu){
    output += `<li><a class="anc" href="${mel}.html">${mel}</a></li>`;
}

output += "</ul>";

///console.log(output);

menuEl.innerHTML = output;
