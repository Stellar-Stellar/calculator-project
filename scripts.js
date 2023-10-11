let var1 = null
let operator = ""
let var2 = null
let result
let counter = 0
let operation = []

const operator_btns = document.querySelectorAll('.op-btn')

const display_num = document.querySelector('.display-num')

const operation_display = document.querySelector('.operation-display')

const number_btns = document.querySelectorAll('.num-btn')


if (counter = 0){
    firstVar()
} else {
    secondVar()
    counter = 0
}

function firstVar() {
    number_btns.forEach((button) => {
        button.addEventListener('click', () => {
            display_num.textContent += button.id
            var1 = display_num.textContent
        })
    })
}

function secondVar() {
    number_btns.forEach((button) => {
        button.addEventListener('click', () => {
            display_num.textContent += button.id
            var2 = display_num.textContent
        })
    })
}

operator_btns.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.id
        counter += 1;
        alert(display_num.textContent)
        alert(var1)
        alert(var2)
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
