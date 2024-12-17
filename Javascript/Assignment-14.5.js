// 5. Accept number from user and display below pattern. 
// Input :  8
// Output :  2 4 6 8 10 12 14 16 
  

function print(digit) {
    let res=0
    for(let i=0;i<digit;i++){
        res=res+2
        console.log(res);
    }
}

print(8)
