// 2. Write a program which accept number from user and print even factors of that 
// number.  
// Input :24   
// Output: 1 2 4 6 8 12 


function print(no) {
    for(let i=1;i<=no/2;i++){
        if(no%i==0){
            console.log(i)
        }
    }
}

print(24)