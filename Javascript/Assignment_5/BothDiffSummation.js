function SumOfFactor(num){
    let factors=0;
    let notFactors=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            factors+=i;
        }else{
            notFactors+=i;
        }
    }

    let result=notFactors-factors;
    console.log(result)
}
SumOfFactor(12)