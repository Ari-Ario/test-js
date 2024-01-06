<?php
function rot13($passcode, $n){
    $passArray= str_split($passcode);
    $str = "";
    foreach ($passArray as $char){
        $assciValue = ord($char);
        if ($assciValue>= 65 && $assciValue<= 90){
            $assciValue += $n;
            if ($assciValue > 90) {
                $encodedValue = 65 + ($assciValue%90) -1;
            } else {
                $encodedValue = $assciValue;
            }
        } elseif ($assciValue>= 97 && $assciValue<= 122){
            $assciValue += $n;
            if ($assciValue > 122){
                $encodedValue = 97 + ($assciValue%122) -1;
            } else {
                $encodedValue = $assciValue;
            }
        } else {
            $encodedValue = $assciValue;
        }
        $encodedChar = chr($encodedValue);
        $str .= $encodedChar;
    }

    return $str;
}
print(rot13("HELLO, hello", 13))
?>