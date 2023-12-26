def factorial(num):

    # recursive:
    """if num == 0:
        return 1
    return factorial(num-1)*num"""

    # or normal-functionl:
    factor = 1
    for i in range(1, num+1):
        factor*= i

    return factor

print(factorial(6))