<?php

function isPrime($x){

    for ($numberRange= 2; $x> $numberRange; $numberRange++){
        if ($x % $numberRange == 0){
            return false;
        } 
    }
    return $x;
}

function sieveOfEratosthenes($n){
    $numberArray = range(2, $n);
    $primeArray = array();
    foreach ($numberArray as $number){
        if (isPrime($number)){array_push($primeArray, $number);}
    }
    print_r($primeArray);
}

sieveOfEratosthenes(100)
?>