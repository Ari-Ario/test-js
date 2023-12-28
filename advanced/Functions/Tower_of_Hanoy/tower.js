
function towerOfHanoy(numberOfDisks){
    if (numberOfDisks==1){
        return 1
    }
    // (2^n)-1 in recursion:
    return (2*towerOfHanoy(numberOfDisks-1)+1)
}

numberOfDisks = 2
console.log(towerOfHanoy(numberOfDisks))