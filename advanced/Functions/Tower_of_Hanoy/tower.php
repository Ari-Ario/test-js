<?php

function towerOfHanoy($numberOfDisks){
    if ($numberOfDisks == 1){
        return 1;
    }
    return 2* towerOfHanoy($numberOfDisks-1)+1;
}

$numberOfDisks = readline("Enter the number of dics: ");
print(towerOfHanoy($numberOfDisks));
?>