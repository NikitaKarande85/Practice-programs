//5. Accept one number from user and print that number of * on screen. 

const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question("Enter one number",(inputNum)=>{
    if(isNaN(inputNum)){
        console.log("Please enter valid number")
        return -1;
    }else{
        for(let i=0;i<inputNum;i++){
            console.log("*");
        }
    }
    readline.close();
})