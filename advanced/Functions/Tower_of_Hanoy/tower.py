
def tower_of_Hanoy(number_of_disks):
    if number_of_disks == 1:
        return 1
    # 2^n -1 in recursion:
    return 2*(tower_of_Hanoy(number_of_disks-1))+1

number_of_disks= 5

print(tower_of_Hanoy(number_of_disks))