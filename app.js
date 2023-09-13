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
    li.innerHTML = `${task.value} <button class="X">X</button> <input type="checkbox" name="Done" id="Done"> <label for="Done">Done</label> `;
    ul.append(li);
    task.value ="";
});

// let X = document.querySelectorAll(".X");
// for (const btn of X) {
//     btn.addEventListener("click",()=>{
//         btn.parentElement.remove();
//     });
// }
//This code doesn't work on new elemnts as new elements added into the list don't get the event listner 
//for this purpose we use event bubbling

ul.addEventListener("click",(event)=>{
    if(event.target.localName == "button"){
        event.target.parentElement.remove(); //event.target gives dewscription of the target
    }
})

