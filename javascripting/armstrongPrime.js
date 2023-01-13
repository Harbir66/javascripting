// 153 = 1^3 + 5^3 + 3^3

const isPrime = (n) =>{
    if(number <=1){
        return false;
    }
    for(let i=2;i<number;i++){
        if(number % i ==0 ) 
            return false;
    }
    return true;
}
const isArmstrong = (n) => {
    let a=number;
    let res=0;
    while(number>0){
        let temp=number %10;
        res += (temp*temp*temp);
        number/=10;
        number=Math.floor(number);
    }
    return (res===a)?true:false;
}

console.log(isArmstrong(153));

console.log(isPrime(2));