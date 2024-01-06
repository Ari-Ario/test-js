<?php

function compress($data){
    $arrayInside= $data[1];
    ksort($arrayInside);
    $arrayKeys = array_keys($arrayInside);
    foreach ($data as $subArrays){
        foreach ($subArrays as $item){
            $dict = $item;
        }
    }
    print_r($arrayKeys);
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