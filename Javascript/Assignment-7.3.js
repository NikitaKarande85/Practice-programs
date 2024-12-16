// 3. Write a program which accept number from user and print its numbers line. 
// Input :   4  
// Output :  -4  -3  -2  -1  0  1  2  3  4 

function print(no) {
  let temp;
  if(no>=0){
    temp=-no;
  }
   for(let i=temp;i<=no;i++){
     console.log(i)
   }
}

print(4)
