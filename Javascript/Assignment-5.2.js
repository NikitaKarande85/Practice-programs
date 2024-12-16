// 2.Write a program which accept number from user and display its factors in 
// decreasing order. 
// Input :  12 
// Output : 6 4 3 2 1 
// Input : 13 
// Output : 1  
// Input : 10
// Output : 5 2 1  

function print(no) {
    if((no/2)%2!=0){
        return 1;
    }
   for(let i=no/2;i>=0;i--){
       if(no%i==0){
        console.log(i)
       }
   }
}

const result=print(13)

console.log("result",result);