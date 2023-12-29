
def compress(data):

    main_list = []
    key_tuple= tuple(sorted(data[0].keys()))
    for element in data:
        value_list= []

        for key in key_tuple:
            value_list.append(element[key])

        main_list.append(tuple(value_list))

    return (key_tuple, main_list)

data = [  # dictionary keys don't have any order
    {"a": 1, "b": 2, "c": 3},
    {"a": 4, "c": 6, "b": 5}
]
print(compress(data))

new_data= [
    {"a": 1, "b": 2, "c": 3},
    {"a": 9, "c": 7, "b": 8}
]
print(compress(new_data))