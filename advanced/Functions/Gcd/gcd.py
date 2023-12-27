
def absolute_value(num):
    return -num

def gcd(a, b):
    if a == 0 or b == 0:
        return 0
    
    if b > a:
        a, b = b, a
    
    if a < 0:
        a = absolute_value(a)

    if b <0:
        b = absolute_value(b)

    if a % b == 0:
        return b

    return gcd(b, a%b)

print(gcd(-27, 18))