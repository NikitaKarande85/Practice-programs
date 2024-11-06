function MultiOfFactor(num){
    let sum=0;
    for(let i=0;i<num;i++){
        if(num%i!=0){
            sum+=i;
        }
    }
    console.log(sum)
}
MultiOfFactor(10)