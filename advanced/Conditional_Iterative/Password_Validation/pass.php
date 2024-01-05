<?php
function passwordValidation($pwd){
    $pwdArray = str_split($pwd);
    $specialchar=0;
    $uppercase=0;
    $lowercase=0;
    $num= 0;
    $extra=0;
    $counter=0;
    foreach ($pwdArray as $char){
        $counter++;
        if ($char== "/" || $char == "-" || $char == "+" || $char == "*"){
            $specialchar++;
        } elseif (ctype_upper($char)){
            $uppercase++;
        } elseif (ctype_lower($char)){
            $lowercase++;
        } elseif (is_numeric($char)){
            $num++;
        } else {
            $extra++;
        }
    }
    if ($counter>=8 && $counter<=16){
        if ($specialchar>1 && $uppercase>1 && $lowercase>1 && $num>1 && $extra==0){
            echo "valid password";
        } else {
            echo "password must contain 2 characters of a-z, A-Z, 2 digits, and 2 special chars of [+*-/]";
        }
    } else {
        echo "password must have btween 8-16 characters";
    }
}

passwordValidation("aBJbG85/-");
?>