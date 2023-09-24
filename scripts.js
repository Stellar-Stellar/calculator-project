let var1
let operator
let var2
let result

const add_btn = document.querySelector('#add-btn')
const subtract_btn = document.querySelector('#subtract-btn')
const multiply_btn = document.querySelector('#')

const operate = function (num1, op, num2){
    if (op = "+") {
        add(num1, num2)
    } else if (op = "-") {
        subtract(num1, num2)
    } else if (op = "*" || "x") {
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