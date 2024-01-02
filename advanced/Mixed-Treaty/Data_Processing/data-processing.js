
// fs for file system to work on files in operatig-system 
const fs = require('fs');

function checkFileExists(filePath) {
  try {
    // Check if the file exists
    fs.accessSync(filePath, fs.constants.F_OK);
    return true; // File exists
  } catch (err) {
    return false; // File does not exist
  }
}

function processData(path) {
    let collectionString= ""
    if (!checkFileExists(path)){
        return "The path doesn't exist"
    }else{
        fs.readFile(path, (err, input) =>{ 
            if (err) throw (err);
            const inputString = input.toString()
            const inputArray= inputString.split("\n")
            collectionString+= "Firstname,Lastname\n"
            // checking the falls of ";", space " ", and extra falls in else
            for (let i=0; i< inputArray.length; i++){
                item = inputArray[i]
                if (item === ""){
                    collectionString+= ",\n"
                } else if (item.includes(';')){
                    let line = item.split("; ")
                    const firstName = line[1]
                    const lastName= line[0]
                    const fullName= firstName+","+lastName+"\n"
                    collectionString+= fullName
                } else if (item.includes(" ")){
                    let line = item.split(" ")
                    const firstName = line[0]
                    const lastName= line[1]
                    const fullName= firstName+","+lastName+"\n"
                    collectionString+= fullName
                } else {continue}
            }
            // deleting the last two characters which is \n: new line, in case it is needed
            collectionString = collectionString.slice(0, -2);

            // writing the processed data into the same file/path
            fs.writeFile(path, collectionString, "utf8", (err) => {
                if (err){ console.log("Error of kind: ", err); }
                else { console.log("Data written into file: ", collectionString)}
            });
        });
    }
}


// write or copy-paste the path below
const path = "/Users/ari/Documents/gitfolder/test-js/advanced/Mixed-Treaty/Data_Processing/test.txt"
processData(path);