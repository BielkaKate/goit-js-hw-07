let counterValue  = 0;

const decrementButtonEl = document.querySelector('[data-action="decrement"]');

const incrementButtonEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");


decrementButtonEl.addEventListener("click", onDecrementButtonClick)

incrementButtonEl.addEventListener("click", onIncrementButtonClick)


function onIncrementButtonClick (event) {
    counterValue +=1;
    spanEl.textContent = counterValue;
}

function onDecrementButtonClick (event) {
    counterValue -=1;
    spanEl.textContent = counterValue;
}   