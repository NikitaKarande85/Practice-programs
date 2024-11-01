//4. Accept one number and check whether is is divisible by 5 or not.  

const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
  
readline.question("Enter the number1", (input1)=>{
   const value=parseInt(input1,10)
   if(isNaN(value)){
    console.log("Please enter valid number")
    return -1;
   }else{
    if(value%5==0){
        console.log(`${value} is divisible by 5`)
    }else{
        console.log(`${value} is not divisible by 5`)
    }
   }
   readline.close();
})