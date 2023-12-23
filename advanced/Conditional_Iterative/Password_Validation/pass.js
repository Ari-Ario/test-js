

let sentence = ""
function passwordValidation(pwd){
    pwd = pwd.split("")
    counter = 0
    assoArr = {}
    let specialCharCounter = 0
    let uppercaseCounter = 0
    let lowercaseCounter = 0
    let digitCounter = 0
    pwd.forEach(element => {
        if (element== "*" || element=="+" || element=="/" || element=="-") { 
            specialCharCounter++
         } else if ( /[A-Z]/.test(element)){
            uppercaseCounter++
         } else if ( /[a-z]/.test(element)){
            lowercaseCounter++
         } else if ( /\d/.test(element)){
            digitCounter++
         } else {return}
    });
    if (specialCharCounter<2 || uppercaseCounter<2 || lowercaseCounter<2 || digitCounter<2){
        sentence= "password must contain 2 characters of a-z, A-Z, 2 digits, and 2 special chars of [+*-/]"
    } else {
        sentence= "valid password"
    }
    console.log(sentence, specialCharCounter, uppercaseCounter, lowercaseCounter, digitCounter)

}

passwordValidation("aBJbG85/-")
const demo = document.getElementById("demo")
demo.innerHTML= sentence