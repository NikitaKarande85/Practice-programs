// 4. Write a program which accepts N from user and print all odd numbers up to N.  
// Input :   18  
// Output :  1 3 5 7 8 11 12

function print(no) {
  for(let i=1;i<=no;i++){
    if(i%2!=0){
      console.log(i)
    }
  }
}

print(18)
