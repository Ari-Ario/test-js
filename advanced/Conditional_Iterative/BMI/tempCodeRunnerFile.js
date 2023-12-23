function bmiCalculator(){
    let height = prompt("Enter the height in meter: ")
    return 'your weight is'+ height;
}

const res = bmiCalculator()
demoResult.innerHTML= res
console.log(res)