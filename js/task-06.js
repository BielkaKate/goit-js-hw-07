const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);

const dataLengthEl = inputEl.dataset.length;
// console.log(dataLengthEl);


inputEl.addEventListener("blur", onInputElBlur);

function onInputElBlur(event) {
    if (event.currentTarget.value.length === Number(dataLengthEl)){
        if (event.currentTarget.classList.contains("invalid"))
        {event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid")}
        event.currentTarget.classList.add("valid")
    }
  
    else {
        if (event.currentTarget.classList.contains("valid"))
        {event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid")}
        event.currentTarget.classList.add("invalid");

    }
} 