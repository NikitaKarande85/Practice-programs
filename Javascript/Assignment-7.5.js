// 5. Write a program which accept N and print first 5 multiples of N.  
// Input :  4  
// Output :  4  8  12  16  20

function print(no) {
  let res=0;
  for(let i=0;i<5;i++){
    res=res+no
    console.log(res)
  }
}

print(4)
