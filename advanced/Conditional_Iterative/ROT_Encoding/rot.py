
def rot13(passcode, n):
    lst = [] #in case of using an empety list to collect charachters
    encoded= ""
    passcode = [x for x in passcode]

    for char in  passcode:
        asciicode = ord(char)
        if char.isalpha() and asciicode>=65 and asciicode<=90:
            new_ascii= asciicode +n
            if new_ascii > 90:
                res = new_ascii-90
                new_ascii = 65+res-1
            new_ascii = chr(new_ascii)
            encoded+=new_ascii #concatenated character
            # lst.append(new_ascii) #append to an empty list

        if char.isalpha() and asciicode >=97 and asciicode<=122:
            new_ascii= asciicode + n
            if new_ascii > 122:
                res = new_ascii-122
                new_ascii = 97+res-1
            new_ascii = chr(new_ascii)
            encoded+=new_ascii #concatenated character
            # lst.append(new_ascii) #append to an empty list

        if not char.isalpha():
            encoded += char

    return encoded

print(rot13("HELLO, hello", 13))