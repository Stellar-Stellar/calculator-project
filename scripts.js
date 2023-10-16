//Current issues:
//-display div doesn't take up space until a button is clicked. can be fixed in css
//-more than one calculation cannot be done properly if the result of the first calculation is being used in the display.
//this may be fixable by using the internal result instead of the display number
let var1 = null
let operator = null
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
                console.log('current variable is ' + curVar)
        })
    })
}
//adds current variable and chosen operator to array list. if list exceeds 3 items, it will check to see what the operator is and run the numbers through the
//appropriate operation function
operator_btns.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.id
        operation.push(curVar)
        operation.push(button.id)
        display_num.textContent = ""
        console.log('the numbers are' + operation)
        counter += 1
        if (counter > 1 && operation[1] == "+") {
            add(parseInt(operation[0]), parseInt(operation[2])) //tag
            operation.splice(0, 3, result)
            console.log(result)
        } else if (counter > 1 && operation[1] == "-") {
            subtract(parseInt(operation[0]), parseInt(operation[2])) //tag
            operation.splice(0, 3, result)
            console.log(result)
        } else if (counter > 1 && operation[1] == "x") {
            multiply(parseInt(operation[0]), parseInt(operation[2])) //tag
            console.log('the numbers are' + operation)
            operation.splice(0, 3, result)
            console.log(result)
        } else if (counter > 1 && operation[1] == "/") {
            divide(parseInt(operation[0]), parseInt(operation[2])) //tag
            console.log('the numbers are' + operation)
            operation.splice(0, 3, result)
            console.log(result)
        }

        if (operator == "=") {
            if (counter > 1 && operation[1] == "+") {
                add(parseInt(operation[0]), parseInt(operation[2])) //tag
                operation.splice(0, 3, result)
                console.log(result)
            } else if (counter > 1 && operation[1] == "-") {
                subtract(parseInt(operation[0]), parseInt(operation[2])) //tag
                operation.splice(0, 3, result)
                console.log(result)
            } else if (counter > 1 && operation[1] == "x") {
                multiply(parseInt(operation[0]), parseInt(operation[2])) //tag
                console.log('the numbers are' + operation)
                operation.splice(0, 3, result)
                console.log(result)
            } else if (counter > 1 && operation[1] == "/") {
                divide(parseInt(operation[0]), parseInt(operation[2])) //tag
                console.log('the numbers are' + operation)
                operation.splice(0, 3, result)
                console.log(result)
            }
            operation = []
            display_num.textContent = result
        }
    })
})

const add = function (a, b) {
    result = a + b
    return result
}

const subtract = function (a, b) {
    result = a - b
    return result
}

const multiply = function (a, b) {
    result = a * b
    return result
}

const divide = function (a, b) {
    result = a/b
    return result
}
