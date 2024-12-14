// . Accept two numbers from user and display first number in second 
// number of times. 

// Input :  
// 12 5 
// Output : 12 12 12 12 12 

// Input :  -2 3 
// Output : -2 -2 -2  

// Input :  
// 21 -3 
// Output : 21 21 21  

// Input :  
// Output :    

function print(no1,no2){
    if(no2<0){
        no2=-no2;
    }
   for(let i=1;i<=no2;i++){
        console.log(no1);
   }
}

print()