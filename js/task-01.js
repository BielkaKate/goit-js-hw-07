const items = document.querySelectorAll("li.item");
console.log(`В списке ${items.length} категории.`);
// let sum = 0;
// items.forEach(item => 
//     sum +=1);
// console.log(`В списке ${sum} категории.`);

items.forEach(item => {
    console.log('Категория:', item.firstElementChild.textContent);
    console.log("Количество элементов:", item.querySelectorAll('li').length);
})