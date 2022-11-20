
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("pre");
let totalEl = document.getElementById("total")

let count = 0;
let total = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    saveEl.textContent += count + "- ";
    total = total + count;
    totalEl.textContent = "FT: " + total;
    count = 0;
    countEl.textContent = count;
}


