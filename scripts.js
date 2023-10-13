let var1 = null
let operator = ""
let var2 = null
let curVar = 0
let result = null
let counter = 0
let operation = []

const operator_btns = document.querySelectorAll('.op-btn')

const display_num = document.querySelector('.display-num')

const operation_display = document.querySelector('.operation-display')

const number_btns = document.querySelectorAll('.num-btn')

//firstVar has to exist to start and it cannot be in a conditional. button events also cant be on conditionals bruh.
//if either firstVar or secondVar are called during the operator selection, it will run both the initial call and the call during operation,
//causing one of the vars to double up. I feel like moving variables has to happen in the operator selection so you can input whatever you want for the first var.

//gets one universal variable everytime a number button is clicked
getVar()

function getVar() {
    number_btns.forEach((button) => {
        button.addEventListener('click', () => {
                display_num.textContent += button.id
                curVar = parseInt(display_num.textContent)
                alert('current var is ' + curVar)
        })
    })
}
//adds current variable and chosen operator to array list. if list exceeds 3 items, it will run operate to get a result
//ITS JUST ADDING NO MATTER THE OPERATOR WHAT????????????
operator_btns.forEach((button) => {
    button.addEventListener('click', () => {
        operation.push(curVar)
        operation.push(button.id)
        display_num.textContent = ""
        alert(operation)
        counter += 1
        if (counter > 1) {
            operate(parseInt(operation[0]), operation[1], parseInt(operation[2])) //tag
            console.log('the numbers are' + operation)
            operation.splice(0, 3, result)
            alert("The operation now looks like " + operation)
            console.log(result)
        }
    })
})

const operate = function (num1, op, num2){
    console.log("the operator is " + op) //IT ACTUALLY READS THE OP PROPERLY BUT STILL DEFAULTS TO ADDITOON????????????????????????
    if (op = "+") { //THIS CONDITIONAL IS TAKEN AS THE DEFAULT NO MATTER WHAT THE OP VALUE ACTUALLY IS FUCKKKK
        result = add(num1, num2)
    } else if (op = "-") {
        result = subtract(num1, num2)
    } else if (op = "x") {
        result = multiply(num1, num2)
    } else if (op = "/") {
        result = divide(num1, num2)
    } else if (op = "=") {
        display_num.textContent = result
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
