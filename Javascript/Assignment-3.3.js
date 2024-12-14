// 3. Write a program which accept number from user and print even factors of that 
// number. 
// Input :  36
// Output: 2 6 12 18

function print(no) {
    for(let i=1;i<=no/2;i++){
        if(no%i==0){
            if(i%2==0){
                console.log(i)
            }
        }
    }
}

print(36)