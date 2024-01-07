<?php

function compress($data){
    $arrayInside= $data[1];
    ksort($arrayInside);
    $arrayKeys = array_keys($arrayInside);
    $mainArray = Array();

    // a mix of for and foreach, although it is possible with for loop too 
    foreach ($data as $subArrays){
        $collectArray = Array();
        for ($i=0; $i< count($arrayKeys); $i++){
            foreach ($subArrays as $item){
                $value = $subArrays[$arrayKeys[$i]];
            }
            array_push($collectArray, $value);
        }
        array_push($mainArray, $collectArray);
    }
    
    print_r(Array($arrayKeys, $mainArray));
}

$data = [
    array("a"=> 1, "b"=> 2, "c"=> 3),
    array("a"=> 4, "c"=> 6, "b"=> 5)
];
compress($data);

$new_data= [
    array("a"=> 1, "b"=> 2, "c"=> 3),
    array("a"=> 9, "c"=> 7, "b"=> 8)
];
compress($new_data);

?>