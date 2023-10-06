let name ="Abha";
let size=10;
let letter="h"
let colorPalette = ["red", "green", "blue", "pink", "orange"]



for (let step=0; step<100; step++){
    let textbox=document.createElement("p");
    textbox.innerHTML="Ah" + letter;
    textbox.style.fontSize=size + "px"
    textbox.style.color=colorPalette[ step% colorPalette.length];
    document.body.appendChild(textBox);
    size++;
    letter+= "h";
}

//Click button to change background color
document.querySelector("button") .addEventListener("click",function() {
document.body.style.backgroundColor="green";
})
