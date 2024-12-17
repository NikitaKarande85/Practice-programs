// 1.Write a program which accept number from user and display below pattern. 
// Input :  5  
// Output :  * * * * * $ $ $ $ $

function print(no) {
    for (let i =0; i<no; i++) {
        console.log("*")
    }
    for (let i =0; i<no; i++) {
        console.log("$")
    }
}

print(5)
