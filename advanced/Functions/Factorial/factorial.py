def factorial(num):

    # recursive:
    """if num == 0:
        return 1
    return factorial(num-1)*num"""

    # or normal-functionl:
    sum = 1
    for i in range(1, num+1):
        sum*= i

    return sum

print(factorial(10))