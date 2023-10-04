let var1
let operator
let var2
let result
let counter

const operator_btns = document.querySelector('#operator-buttons')
const add_btn = document.querySelector('.add-btn')
const subtract_btn = document.querySelector('.subtract-btn')
const multiply_btn = document.querySelector('.multiply-btn')
const divide_btn = document.querySelector('.divide-btn')
const equals_btn = document.querySelector('.equals-btn')
const clear_btn = document.querySelector('.clear-btn')
const backspace_btn = document.querySelector('.backspace-btn')

const number_btns = document.querySelector('#number-buttons')
const nine_btn = document.querySelector('.nine-btn')
const eight_btn = document.querySelector('.eight-btn')
const seven_btn = document.querySelector('.seven-btn')
const six_btn = document.querySelector('.six-btn')
const five_btn = document.querySelector('.five-btn')
const four_btn = document.querySelector('.four-btn')
const three_btn = document.querySelector('.three-btn')
const two_btn = document.querySelector('.two-btn')
const one_btn = document.querySelector('.one-btn')
const zero_btn = document.querySelector('.zero-btn')
const var1_display = document.querySelector('.var1-display')
const operator_display = document.querySelector('.operator_display')
const var2_display = document.querySelector('.var2-display')
const result_display = document.querySelector('.result-display')


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