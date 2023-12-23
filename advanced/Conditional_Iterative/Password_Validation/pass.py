
def password_validation(pwd):
    if len(pwd) < 8:
        sentence = "The password must be longer than 8 charsacters"
    elif len(pwd) >16:
        sentence = "The password must be less than 17 characters"
    dic= {}
    for char in pwd:
        if ("special" not in dic) and char in "+*-/":
            dic["special"] = []
            dic["special"].append(char)
        elif ("special" in dic) and char in "+*-/":
            dic["special"].append(char)
            
        elif ("uppercase" not in dic) and char.isupper():
            dic["uppercase"] = []
            dic["uppercase"].append(char)
        elif ("uppercase" in dic) and char.isupper():
            dic["uppercase"].append(char)
            
        elif ("lowercase" not in dic) and char.islower():
            dic["lowercase"] = []
            dic["lowercase"].append(char)
        elif ("lowercase"  in dic) and char.islower():
            dic["lowercase"].append(char)

        elif ("digit" not in dic) and char.isdigit():
            dic["digit"]= []
            dic["digit"].append(char)
        elif ("digit" in dic) and char.isdigit():
            dic["digit"].append(char)

    if  len(dic["uppercase"])>=2 and len(dic["special"]) >=2 and len(dic["lowercase"])>=2 and len(dic["digit"])>=2:
        sentence= "valid password"
    else:
        sentence = "password must contain 2 characters of a-z, A-Z, 2 digits, and 2 special chars of [+*-/]"
    
    return sentence

    
print(password_validation("Hi2345//*+HGHl"))