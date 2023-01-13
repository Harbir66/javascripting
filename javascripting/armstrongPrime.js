// const { FlatESLint } = require("eslint/lib/eslint");

// 153 = 1^3 + 5^3 + 3^3
function isPrime(number){
    if(number <=1){
        return false;
    }
    for(let i=2;i<number;i++){
        if(number % i ==0 ) 
            return false;
    }
    return true;
}
function armstrongPrime(number){
    let a=number;
    // if(! isPrime(number)) return false;
    let res=0;
    while(number>0){
        let temp=number %10;
        res += (temp*temp*temp);
        number/=10;
        number=Math.floor(number);
    }
    return (res===a)?true:false;
}

console.log(armstrongPrime(153));

// console.log(isPrime(6));