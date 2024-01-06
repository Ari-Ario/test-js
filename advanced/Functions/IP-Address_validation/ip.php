<?php
function is_valid_IPv4_octet($octet){
    echo "$octet";
    if ($octet >=0 && $octet<=255){
        return true;
    } else {return false;}
}

function is_valid_IPv6_hextet($hextet){
    return true;
}

function is_valid_IPv4($ip){
    $octetArray = preg_split("/[.]/", $ip);
    print_r($octetArray);
    for ($i=0; $i<sizeof($octetArray); $i++){
        return is_valid_IPv4_octet($octetArray[$i]);
    }
}

function is_valid_IPv6($ip){
    $hextetArray = preg_split("/[:]/", $ip);
    foreach ($hextetArray as $hextet){
        return is_valid_IPv6_hextet($hextet);
    }
}

function isValidIP($ip){
    $ipArray = str_split($ip);
    $dots = 0;
    $colons= 0;
    foreach ($ipArray as $char){
        if ($char == "."){ $dots++; }
        elseif ($char == ":"){ $colons++; }
    }
    if ($dots == 3){
        is_valid_IPv4($ip);
    } elseif($colons == 7){
        return is_valid_IPv6($ip);
    } else { return "false";}
}

$IPv4_STRING = "127.0.0.1";
$IPv4_INVALID_STRING = "300.0.0.1";
$IPv6_STRING = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
$IPv6_INVALID_STRING = "2001:0db8:85a3:0000:0000:8a2e:0370:7334:7334";
$INVALID_IP_STRING = "Error";

echo "${IPv4_STRING}, is a valid IP Address: " , isValidIP($IPv4_STRING);
echo "\n";
echo "${IPv4_INVALID_STRING}, is a valid IP Address: ", isValidIP($IPv4_INVALID_STRING);
echo "\n";
echo "$IPv6_STRING, is a valid IP Address:", isValidIP($IPv6_STRING);
echo "\n";
echo "$IPv6_INVALID_STRING, is a valid IP Address:", isValidIP($IPv6_INVALID_STRING);
echo "\n";
echo "$INVALID_IP_STRING, is a valid IP Address:", isValidIP($INVALID_IP_STRING);

?>