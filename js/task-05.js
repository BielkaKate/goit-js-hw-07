const inputEl = document.querySelector("[type='text']");
console.log(inputEl);

const spanEl = document.querySelector("#name-output")
console.log(spanEl);

inputEl.addEventListener("input", onInputChange);


function onInputChange(event){
    spanEl.textContent = event.currentTarget.value.trim() || "незнакомец";
    // spanEl.textContent = event.currentTarget.value;
    // console.log(event); 
    // if (event.currentTarget.value === ""){
    //     spanEl.textContent = "незнакомец"
    // }

    // spanEl.textContent = event.currentTarget.value ? event.currentTarget.value : "незнакомец"
};

