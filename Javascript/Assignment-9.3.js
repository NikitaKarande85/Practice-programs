// 4. Write a program to find odd factorial of given number.  
// Input :  5  
// Output :  15   (5 * 3 * 1)
// Input :  -5  
// Output :  15   (5 * 3 * 1)
// Input :  10  
// Output :  945  (9 * 7 * 5 * 3 * 1)

function print(no) {
    let result=1;
    for(let i=1;i<=no;i++){
        if(i%2!=0){
            result=result*i;
        }
    }
    console.log("result",result);
}

print(5)
