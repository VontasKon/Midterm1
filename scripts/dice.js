
// Select the HTML elements
const diceResult = document.querySelector("#diceResult");
const diceMessage = document.querySelector("#diceMessage");

const rollD4 = document.querySelector("#rollD4");
const rollD6 = document.querySelector("#rollD6");
const rollD8 = document.querySelector("#rollD8");
const rollD10 = document.querySelector("#rollD10");
const rollD12 = document.querySelector("#rollD12");
const rollD20 = document.querySelector("#rollD20");
const rollD100 = document.querySelector("#rollD100");


//d4
rollD4.addEventListener("click", function() {
    const result = Math.floor(Math.random() * 4) + 1;
    diceResult.textContent = result;
    diceMessage.textContent = "You rolled a D4!";
});


//D6
rollD6.addEventListener("click", function() {
    const result = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = result;
    diceMessage.textContent = "You rolled a D6!";
});
// D8
rollD8.addEventListener("click", function() {
    const result = Math.floor(Math.random() * 8) + 1;
    diceResult.textContent = result;
    diceMessage.textContent = "You rolled a D8!";
});


// D10
rollD10.addEventListener("click", function() {
    const result = Math.floor(Math.random() * 10) + 1;
    diceResult.textContent = result;
    diceMessage.textContent = "You rolled a D10!";
});


// d12
rollD12.addEventListener("click", function() {
    const result = Math.floor(Math.random() * 12) + 1;
    diceResult.textContent = result;
    diceMessage.textContent = "You rolled a D12!";
});


// d20, with some extra responses ;)
rollD20.addEventListener("click", function() {
    const result = Math.floor(Math.random() * 20) + 1;
    diceResult.textContent = result;

    if (result === 20) {
        diceMessage.textContent = "NAT 20!";
        diceResult.className = "display-1 fw-bold my-3 text-success";

    } else if (result === 1) {
        diceMessage.textContent = "Critical Failure!";
        diceResult.className = "display-1 fw-bold my-3 text-danger";

    } else {
        diceMessage.textContent = "You rolled a D20!";
        diceResult.className = "display-1 fw-bold my-3";
    }
});


// precentile dice
rollD100.addEventListener("click", function() {
    const result = Math.floor(Math.random() * 100) + 1;
    diceResult.textContent = result;
    diceMessage.textContent = "You rolled a Percentile Dice!";
});
