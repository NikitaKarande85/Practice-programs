// 1.Write a program which accept number from user and display its multiplication of 
// factors. 
// Input :  12  (1 * 2 * 3 * 4 * 6) 
// Output : 144  
// Input : 13 
// Output : 1    
// Input :  10   (1 * 2 * 5) 
// Output : 10 

function print(no) {
   let result=1;
   for(let i=1;i<=no/2;i++){
       if(no%i==0){
        result=result*i;
       }
   }
   return result
}

const result=print(13)

console.log("result",result);