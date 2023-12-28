
function isValidIP(ip){
    const ipArray= ip.split("")
    let dots = 0;
    let colons = 0;
    ipArray.forEach(element => {
        if (element==="."){dots++}
        else if (element===":"){colons++}
    });
    if (dots === 3){
        return isValidIPv4(ip);
    } else if (colons === 7){
        return isValidIPv6(ip);
    } else {return false}
}

function isValidIPv4(ip){
    const octets = ip.split(".");
    if (octets.length !== 4 ){
        return false
    }else {    
        for (let i=0; i<octets.length; i++){ return isValidIPv4Octet(octets[i])}
    }
}

function isValidIPv6(ip){
    const hextets = ip.split(":")
    if (hextets.length !== 8) {
        return false
    }else {    
        for (let i=0; i<hextets.length; i++){ return isValidIPv6Hextet(hextets[i]) }
    }
}

function isValidIPv4Octet(octet){
    return octet>= 0 && octet <= 255
}

function isValidIPv6Hextet(hextet){
    return parseInt(hextet, 16)>=0 && parseInt(hextet, 16)<= 65535
}

const IPv4_STRING = "127.0.0.1"
const IPv4_INVALID_STRING = "300.0.0.1"
const IPv6_STRING = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
const IPv6_INVALID_STRING = "2001:0db8:85a3:0000:0000:8a2e:0370:7334:7334"
INVALID_IP_STRING = "Error"

console.log(IPv4_STRING, ' is a valid IP Address: ', isValidIP(IPv4_STRING))
console.log(IPv4_INVALID_STRING, " is a valid IP Address: ",
isValidIP(IPv4_INVALID_STRING))
console.log(IPv6_STRING, " is a valid IP Address:", isValidIP(IPv6_STRING))
console.log(IPv6_INVALID_STRING, " is a valid IP Address:",
isValidIP(IPv6_INVALID_STRING))
console.log(INVALID_IP_STRING, " is a valid IP Address:",
isValidIP(INVALID_IP_STRING))