// .Write a program which accept string from user and count number of 
// capital characters. 
// Input :   “Marvellous Multi OS” 
// Output :   4 

function print(str) {
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]>='A' && str[i]<='Z'){
            count++;
        }
    }
    console.log(count)
}

print("Marvellous Multi OS");

