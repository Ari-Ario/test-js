import math
def sieve_of_eratosthenes(n):
    if n< 2:
        return "[empty]"
    lst= [x for x in range(2, n+1)]

    for i in reversed(lst):
        for j in range(2, int(i/2)+1):
            if i % j != 0:
                continue
            elif i % j == 0 :
                lst.remove(i)
                break
    

    return lst

print(sieve_of_eratosthenes(100))
