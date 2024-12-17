//. Accept number from user and display below pattern.
// Input : 4
// Output :  4 # 3 # 2 # 1 # 
  

function print(digit) {
    let str='A'
    for(let i=1;i<=digit;i++){
        console.log(i);
        console.log("#");
    }
}

print(5)
