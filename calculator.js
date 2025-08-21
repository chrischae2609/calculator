const clearBtn = document.getElementById("clear");
const solveBtn = document.getElementById("solve");

const numBtns = document.querySelectorAll(".number");
const opBtns = document.querySelectorAll(".operator")

const display = document.getElementById("display");


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        alert("Cannot divide by 0!");
        return null;
    } else {
        return num1 / num2;
    }
}

function operate(num1, num2, operator) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

let num1 = '';
let operator = '';
let num2 = '';
let isSecondNumber = false;

numBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if (!isSecondNumber) {
            num1 += btn.value;
            if (num1.length >= 13) {
                alert("too long!");
                return;
            }
            display.textContent = num1;
            calculator.firstNum = num1;
        } else {
            num2 += btn.value;
            if (num2.length >= 13) {
                alert("too long!");
                return;
            }
            display.textContent = num2;
            calculator.secondNum = num2;
        }
    })
})

opBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (num1 === '') return;
        if (num1 !== '' && num2 !== '') {
            const result = operate(num1, num2, operator);
            display.textContent = result;
            num1 = result.toString();
            num2 = ''
        }
        operator = btn.value;
        isSecondNumber = true;
    })
})



solveBtn.addEventListener("click", ()=>{
    if (num1 !== '' && num2 !== '' && operator !== '') {
        const answer = operate(num1, num2, operator);
        display.textContent = answer;
        num1 = answer.toString();
        num2 = '';
        operator = '';
        isSecondNumber = false;
    }
});

clearBtn.addEventListener("click", function () {
    display.textContent = '0';
    num1 = '';
    num2 = '';
    isSecondNumber = false;
});
