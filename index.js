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
            // e.target.value === calc[-1] ?
            // calc.splice(-1, 1, e.target.value) :
            calc.push(calcDisplay.value, e.target.value)

            calcDisplay.value = ""
            console.log(calc)
            break

        /* Clear calc-display value */

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
            console.log(calc)
            
            str = calc.join(" ")
            sum = Number(str)
            
            // for (i = 0; i < calc.length; i++)
            // {
            //     sum += parseFloat(calc[i])
            //     console.log(sum)
            // }
            
            calc = []
            calcDisplay.value = sum
            break
    }
})
