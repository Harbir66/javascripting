// 153 = 1^3 + 5^3 + 3^3

const isPrime = (n) =>{
    if(n <=1){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n % i ==0 ) 
            return false;
    }
    return true;
}
const isArmstrong = (n) => {
    let a=n;
    let res=0;
    while(n>0){
        let temp=n %10;
        res += (temp*temp*temp);
        n/=10;
        n=Math.floor(n);
    }
    return (res===a)?true:false;
}

console.log(isArmstrong(153));

console.log(isPrime(2));