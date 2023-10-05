let var1 = ""
let operator = ""
let var2 = ""
let result
let counter = 0

const operator_btns = document.querySelectorAll('.op-btn')

const display_num = document.querySelector('.display-num')

const number_btns = document.querySelectorAll('.num-btn')

number_btns.forEach((button) => {
    button.addEventListener('click', () => {
        display_num.textContent += button.id
        alert(button.id);
    })
})

const operate = function (num1, op, num2){
    if (op = "+") {
        add(num1, num2)
    } else if (op = "-") {
        subtract(num1, num2)
    } else if (op = "x") {
        multiply(num1, num2)
    } else if (op = "/") {
        divide(num1, num2)
    }
}

const add = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const multiply = function (a, b) {
    return a * b
}

const divide = function (a, b) {
    return a/b
}

console.log(add(5, 5))
console.log(subtract(10, 9))
console.log(multiply(2, 6))
console.log(divide(5, 10))
console.log(var1_display)