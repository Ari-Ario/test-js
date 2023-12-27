function absoluteValue(num){
    return -num;
}

function gcd(a, b){
    if (a === 0 || b === 0){ return 0; }

    if (a < 0){ a = absoluteValue(a)}
    if (b < 0){ b = absoluteValue(b)}

    if (a < b){ a, b = b, a }
    if (a%b == 0){ return b}

    return gcd(b, a%b)
}

console.log(gcd(-12, -60))