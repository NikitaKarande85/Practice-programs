// 3.Write a program which accept number from user and display all its non factors.
// Input :  12 
// Output : 5 7 8 9 10 11
// Input : 13 
// Output : 2 3 4 5 6 7 8 9 10 11 12
// Input :  10  
// Output : 3 4 6 7 8 9  

function print(no) {
   for(let i=1;i<=no;i++){
       if(no%i!=0){
        console.log(i)
       }
   }
}

const result=print(10)

console.log("result",result);