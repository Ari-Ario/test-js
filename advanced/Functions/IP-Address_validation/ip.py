
def is_valid_IP(ip):
    if ":" in ip and ip.count(":")== 7:
        return is_valid_IPv6(ip)
    elif "." in ip and ip.count(".")==3:
        return is_valid_IPv4(ip)
    else:
        return False

def is_valid_IPv4(ip):
    for octet in ip.split("."):
        if is_valid_IPv4_octet(octet):
            return True
        else:
            return False

def is_valid_IPv6(ip):
    for hextet in ip.split(":"):
        if is_valid_IPv6_hextet(hextet):
            return True
        else:
            return False

def is_valid_IPv4_octet(octet):
    return 0 <= int(octet) <= 255

def is_valid_IPv6_hextet(hextet):
    return 0 <= int(hextet, 16) < int("ffff", 16)

IPv4_STRING = "127.0.0.1"
IPv4_INVALID_STRING = "300.0.0.1"
IPv6_STRING = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
IPv6_INVALID_STRING = "2001:0db8:85a3:0000:0000:8a2e:0370:7334:7334"
INVALID_IP_STRING = "Error"

print(IPv4_STRING, ' is a valid IP Address: ', is_valid_IP(IPv4_STRING))
print(IPv4_INVALID_STRING, " is a valid IP Address: ",
    is_valid_IP(IPv4_INVALID_STRING))
print(IPv6_STRING, " is a valid IP Address:", is_valid_IP(IPv6_STRING))
print(IPv6_INVALID_STRING, " is a valid IP Address:",
    is_valid_IP(IPv6_INVALID_STRING))
print(INVALID_IP_STRING, " is a valid IP Address:",
    is_valid_IP(INVALID_IP_STRING))