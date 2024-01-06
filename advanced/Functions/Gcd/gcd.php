<?php

function gcd($num1, $num2){
    if ($num1 < 0) {
        $num1 = -$num1;
    }
    if ($num2 < 0){
        $num2 = -$num2;
    }
    if ($num2 > $num1){
        $res = $num2 - $num1;
        $num2 = $num1;
        $num1 = $num2 + $res;
    }

    if ($num2 == 0){
        return $num1;
    }

    return gcd($num2, $num1%$num2);
}

print(gcd(-36, -90))
?>