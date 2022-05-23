let calcDisplay = document.querySelector("#calc-display")

const calcBtn = document.querySelectorAll("button")

for (i = 0; i < calcBtn.length; i++)
{
    calcBtn[i].addEventListener("click", (e) =>
    {
        calcDisplay.value += e.target.value
    })
}