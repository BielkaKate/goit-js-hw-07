const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(spanEl);


inputEl.addEventListener("input", onInputRange);

function onInputRange(event){
    console.log(event.currentTarget.value);
 
    // spanEl.style.fontSize = `${event.currentTarget.value}px`;
    spanEl.style.fontSize = `${event.currentTarget.value}%`;
}

