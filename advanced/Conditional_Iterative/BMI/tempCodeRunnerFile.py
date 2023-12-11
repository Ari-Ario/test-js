def bmiCalculator():
    height = float(input("Enter the height: "))
    weight = float(input("Enter the weight: "))
    bmi = weight / (height**2)
    res = ""
    if (bmi >= 0 and bmi <= 18.5):
        res = "Underweight"
    elif (bmi > 18.5 and bmi <= 25):
        res = "Normal weight"
    elif (bmi > 25 and bmi <= 30):
        res = "Pre-obesity"
    elif (bmi > 30 and bmi <= 35):
        res = "Obesity class I"
    elif (bmi > 35 and bmi <= 40):
        res = "Obesity class II"
    elif (bmi > 40):
        res = "Obesity class III"
    else:
        res = "Enter a positive number"
    return "The person with height: {height} and weight: {weight} is {res}"

print(bmiCalculator())