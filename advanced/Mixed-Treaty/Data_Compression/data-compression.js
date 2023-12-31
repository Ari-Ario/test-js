
function compress(data){
    let mainArray= Array()
    const sortedKeys= Object.keys(data[1]).sort()
    let dict = {}
    for (let i=0; i<data.length ; i++){
        let collectArray = []
        dict= data[i]
        for (key in dict){
            for (let j=0; j<sortedKeys.length; j++){
                collectArray[sortedKeys[j]]= dict[sortedKeys[j]]
            }
        };
        mainArray.push(Object.values(collectArray))
    }
    const result= [sortedKeys, mainArray]
    const immutableResult = Object.freeze(result)
    // immutableResult.push([123]) //returns an error because it is immutable now
    return immutableResult
}

data = [
    {"a": 1, "b": 2, "c": 3},
    {"a": 4, "c": 6, "b": 5}
]
console.log(compress(data))

new_data= [
    {"a": 1, "b": 2, "c": 3},
    {"a": 9, "c": 7, "b": 8}
]
console.log(compress(new_data))
