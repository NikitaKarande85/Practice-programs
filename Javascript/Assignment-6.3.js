// 3. Write a program which accept two numbers and check whether numbers are 
// equal or not.  
// Input : 10 10  
// Output : Equal  
// Input : 10 12  
// Output : Not Equal 
// Input : 10 -10  
// Output : Not Equal  

function print(no1,no2) {
    if(no1==no2){
        console.log("Equal");
    }else{
        console.log("Not Equal")
    }
}

print(10,-10)
