
function bmiCalculator(){
    let height = prompt("Enter your height in meter: ");
    const weight = prompt("Enter your weight in kilogram: ");
    const bmiNumber= weight/ height**2;
    let string = "";
    if (weight<0 || weight>150 || height<0 || height>2.5){
        string = "Please eater correct numbers [0-150]! ";
    } else if (bmiNumber>=0 && bmiNumber<=18.5){
        string = "Underweight";
    } else if (bmiNumber>18.5 && bmiNumber<=25){
        string = "Normal weight";
    } else if (bmiNumber>25 && bmiNumber<=30){
        string = "Pre-obesity";
    } else if (bmiNumber>30 && bmiNumber<=35){
        string = "Obesity class I";
    } else if (bmiNumber>35 && bmiNumber<=40){
        string = "Obesity class II";
    } else if (bmiNumber>40){
        string = "Obesity class III";
    } 
    return 'your Body Mass Index is: '+ string;
}

const res = bmiCalculator()
console.log(res)

// showing the result on Web
// const demoResult= document.getElementById("demo")
// demoResult.innerHTML= res
