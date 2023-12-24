encoded = ""
function rotEncoding(word, n){

    for (let i=0; i<word.length; i++){
        asciiCode= word[i].charCodeAt(0)
        if (asciiCode<= 90 && asciiCode >= 65){
            asciiCode+=n
            if (asciiCode>90){
                res= asciiCode-90
                asciiCode= 65+res-1
            }
        }
        if (asciiCode <= 122 && asciiCode >= 97){
            asciiCode+=n
            if (asciiCode > 122){
                res = asciiCode-122
                asciiCode= 97+res-1
            }
        }

        encoded += String.fromCharCode(asciiCode)
    }
    return encoded
}

console.log(rotEncoding("aBc,./ DZz", 13))
const demo = document.getElementById("demo")
demo.innerHTML= encoded