//Current issues:
//-display div doesn't take up space until a button is clicked. can be fixed in CSS
//IDEA: Have the last used operator button be highlighted/darkened in CSS for user clarity
//ISSUE: Equals button does not display error properly
let operator
let result
let displayValue
let internalValue = ""
let operation_arr = []
let counter = 0

const number_btns = document.querySelectorAll(".num-btn")

const operator_btns = document.querySelectorAll(".op-btn")

const equals_btn = document.querySelector(".eq-btn")

const clear_btn = document.querySelector(".clear-btn")

const display_screen = document.querySelector("#display-screen")

//updates the display with the appropriate number every time a number button is clicked
number_btns.forEach((button) => {

    button.addEventListener('click', () => {
        display_screen.textContent += button.id
        displayValue = parseInt(display_screen.textContent)
        internalValue += button.id
        console.log(displayValue)
        console.log("the internal value is " + internalValue)
    })

})

operator_btns.forEach((button) => {

    button.addEventListener('click', () => {
        operator = button.id
        operation_arr.push(parseInt(internalValue))
        operation_arr.push(operator)
        console.log("the numbers are currently " + operation_arr)
        if (operation_arr.length > 2) {
            operate(operation_arr[0], operation_arr[1], operation_arr[2])
            operation_arr.splice(0, 3, result)
            console.log("the numbers are now: " + operation_arr)
        }
        display_screen.textContent = operation_arr
        internalValue = ""
    })

})

equals_btn.addEventListener('click', () => {
    operation_arr.push(parseInt(internalValue))
    operation_arr.push(operator)
    if (operation_arr.length > 2) {
        operate(operation_arr[0], operation_arr[1], operation_arr[2])
        operation_arr.splice(0, 4, result)
        console.log("the numbers are now: " + operation_arr)
        display_screen.textContent = operation_arr
        internalValue = operation_arr[0]
    } 

    if (internalValue = "") {
        display_screen.textContent = "ERROR"
    }
})


//operating functions
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
    return a / b
}

//takes the operator and both variables, checks the value of the operator, then calls the appropriate function
//and whatever returns becomes the "result" variable
function operate (num1, op, num2) {
    if (op == "+") {
        return result = add(num1, num2)
    } else if (op == "-") {
        return result = subtract(num1, num2)
    } else if (op == "x") {
        return result = multiply(num1, num2)
    } else if (op == "/") {
        return result = divide(num1, num2)
    }
}


console.log(operator)