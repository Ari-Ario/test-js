function factorial(num) {
    // recursie:
    if (num == 0){ return 1}
    return factorial(num-1)* num

    // normal functional
    /*let factorial =1;
    for (let i=1; i< num+1; i++){
        factorial*= i
    }
    return factorial*/
}

console.log(factorial(10))