

const newText = "something"

switch (newText) {
    case "sth":
        console.log(`${newText} is shorten`)
        break;
    case "something":
        console.log(`${newText} is full-length`)
        break;
    default:
        console.log("Non of them.")
}



function greater(x, y){
    if (x > y) {
        console.log(`first number: ${x} is greater than second number: ${y}`)
    } else {
        console.log(`second number: ${y} is greater than first number: ${x}`)
    }
}
greater(100, 102)