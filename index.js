/* Store calculation (calc) in a variable */

let calc = []

/* Store sum in a variable */

let sum = 0

/* Calc display */

const calcDisplay = document.querySelector("#calc-display")

/* Listen for calc-pad button clicks */

document.addEventListener("click", (e) =>
{
    switch (e.target.value)
    {
        /* Calc input and operators */

        case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": 
            calcDisplay.value == sum ? calcDisplay.value = "" : false
            calcDisplay.value += e.target.value
            break

        case "0":
            calcDisplay.value > 0 || calcDisplay.value.includes(".") ?
            calcDisplay.value += e.target.value : false
            break

        case ".":
            calcDisplay.value > 0 && !calcDisplay.value.includes(".") ?
            calcDisplay.value += e.target.value : false
            break

        case "+": case "-": case "*": case "/":
            calcDisplay.value ? calc.push(calcDisplay.value) : false
            !calcDisplay.value || !typeof calc.at(-1) === "number" ? calc.pop() : false // Overrides last operator in array if any
            calc.push(e.target.value)
            calcDisplay.value = ""
            console.log(calc)
            break

        /* Clear calc-display */

        case "del":
            calcDisplay.value = ""
            break

        /* Reset everything */

        case "reset":
            calc = []
            sum = 0
            calcDisplay.value = ""
            break

        /* Calculate and return sum */

        case "calculate":
            calc.push(calcDisplay.value)
            sum = eval(calc.join(" ")) // Eval can read string as numbers/operators without being so damn critical <3
            calc = []
            calcDisplay.value = sum
            break
    }
})
