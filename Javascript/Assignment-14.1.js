//. Accept number from user and display below pattern.
// Input : 5 
// Output : A B C D E
  

function print(digit) {
    let str='A'
    for(let i=0;i<digit;i++){
        console.log(String.fromCharCode(str.charCodeAt(0) + i))
    }
}

print(5)
