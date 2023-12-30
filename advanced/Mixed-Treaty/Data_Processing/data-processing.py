import os

def process_data(path):
    new_list= []
    if not os.path.exists(path):
        return "The path doesn't exist"
    else:
        with open(path, "r") as read_from_file:
            header = read_from_file.readline()
            # case empty file should result in empty file
            if header == "":
                return None
            # append the line in both case:
            if header.find("\n") != -1:
                new_list.append("Firstname,Lastname\n")
            else:
                new_list.append("Firstname,Lastname")
            # or just: new_list.append("Firstname,Lastname")
            
            #rest of the lines in the document
            lines = read_from_file.readlines()
            for line in lines:
                index_semicolon = line.find(";")

                # case lastname; firstname
                if index_semicolon != -1:
                    if line.find("\n") != -1:
                        firstname = line[index_semicolon + 2:-1]
                        lastname = line[:index_semicolon] + "\n"
                    else:
                        firstname = line[index_semicolon + 2:]
                        lastname = line[:index_semicolon]
                    new_list.append("{},{}".format(firstname, lastname))

                # case empty line
                elif line == "\n":
                    new_list.append(",\n")

                # case firstname lastname
                else:
                    index_space = line.find(" ")
                    firstname = line[:index_space]
                    lastname = line[index_space + 1:]
                    new_list.append("{},{}".format(firstname, lastname))
        
        # writing the collected data of new_list into the same text-file again
        with open(path, "w") as write_to_file:
            for line in new_list:
                write_to_file.write(line)

# write or copy-paste the path below
path = "/Users/.../test-js/advanced/Mixed-Treaty/Data_Processing/test.txt"
print(process_data(path))