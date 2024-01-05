<?php
function bmiCalculator(){
    $weight = readline("Enter your weight in kilograms: ");
    $height = readline("Enter your height in meter: ");

    $bmi = $weight/($height**2);
    if ($bmi<0){
        $res = "weight and height must be positive numbers!";
    } elseif ($bmi>= 0 && $bmi<=18.5){
        $res = "Underweight";
    } elseif ($bmi> 18.5 && $bmi<=25){
        $res= "Normal weight";
    } elseif ($bmi> 25 && $bmi<=30){
        $res = "Pre-obesits";
    } elseif ($bmi> 30 && $bmi<=35){
        $res = "Obesity class I";
    } elseif ($bmi> 35 && $bmi<=40){
        $res = "Obesity class II";
    } elseif ($bmi> 40){
        $res = "Obesity class III";
    }

    if ($weight>= 0 && $height>= 0){
        return ("${res}, you Body mass index is: $bmi");
    } else {return $res;};
};

print_r(bmiCalculator())
?>