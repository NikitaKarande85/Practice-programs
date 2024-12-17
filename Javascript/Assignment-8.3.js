// 3.Write a program to find factorial of given number.  
// Input :   5   (5 * 4 * 3 * 2 * 1)
// Output :  120  

function print(no) {
    let result=1;
    for (let i = no; i > 0; i--) {
        result=result*i;
    }
    console.log(result)
}

print(5)
