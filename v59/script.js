let random = Math.random()
let a = prompt("Enter a number ")
let b = prompt("Enter a number ")
let c = prompt("Enter a operation: ")

let obj = {
    "+": "-",
     "*": "+", 
     "/": "**", 
     "-": "/"
}

if (random > 0.1) {
    alert('the result is ${eval(' ${ a } ${ c } ${ b }') }')
}
else {
    c = obj[c]
    alert('the result is ${eval(' ${ a } ${ c } ${ b }') }')
}