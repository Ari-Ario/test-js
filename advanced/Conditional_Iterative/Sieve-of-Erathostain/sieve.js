
function sieveOfEratosthenes(n){
    let lst= []
    if (!n || n<2){return "[empty]"}
    for (let i=2; i<=n; i++){
        lst.push(i)
        }

    console.log(lst.filter(isPrime))
}

function isPrime(element) {
    for (let elementRange=2; element> elementRange; elementRange++){
        if (element % elementRange === 0){
            return false;
        }
    }
    return element;
};

sieveOfEratosthenes(100)

const demo = document.getElementById("demo")
demo.innerHTML= sieveOfEratosthenes(100)
