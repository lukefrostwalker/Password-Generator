const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let outputOne = document.querySelector("#output-one");
let outputTwo = document.querySelector("#output-two");
let hasGenerated = false
let pwLength = document.querySelector("#pwLength")

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function generatePasswords() {
    if (hasGenerated === false) {
        for (i = 0; i < pwLength.value; i++) {
            let randomized1 = Math.floor(Math.random() * characters.length)
            let randomized2 = Math.floor(Math.random() * characters.length)
            outputOne.value += characters[randomized1]
            outputTwo.value += characters[randomized2]
            hasGenerated = true
        } 
    } else {
        outputOne.value = ""
        outputTwo.value = ""
        hasGenerated = false
        generatePasswords()
    }
}
function copyTextOne() {
    navigator.clipboard.writeText(outputOne.value)
    let tooltip = document.querySelector("#myTooltipOne")
    tooltip.innerHTML = "Copied to clipboard"
}
function copyTextTwo() {
    navigator.clipboard.writeText(outputTwo.value)
    let tooltip = document.querySelector("#myTooltipTwo")
    tooltip.innerHTML = "Copied to clipboard"
}
function outFuncOne() {
    let tooltip = document.getElementById("myTooltipOne");
    tooltip.innerHTML = "Copy to clipboard";
  }
function outFuncTwo() {
    let tooltip = document.getElementById("myTooltipTwo");
    tooltip.innerHTML = "Copy to clipboard";
}
