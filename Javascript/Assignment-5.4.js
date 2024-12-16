// 4.Write a program which accept number from user and return summation of all its 
// non factors. 
// Input :  12 
// Output : 50  
// Input :  10  
// Output : 37  

function print(no) {
    let result=0;
   for(let i=1;i<=no;i++){
       if(no%i!=0){
        result+=i;
       }
   }
   return result;
}

const result=print(12)

console.log("result",result);