let task = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

task.addEventListener("keypress",(event)=>{
    if(event.key == "Enter"){
        btn.click();
    }
});

btn.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.innerHTML = `${task.value} <button class="X">X</button> `;
    ul.append(li);
    task.value ="";
});

ul.addEventListener("click",(event)=>{
    if(event.target.localName == "button"){
        event.target.parentElement.remove(); //event.target gives description of the target
    }
})

