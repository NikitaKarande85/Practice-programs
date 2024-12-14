// 4. Accept one character from user and convert case of that character.  
// Input : a   
// Input : D   
// Output : A  
// Output : d  

function print(str) {
    if(str>='A' && str<='Z'){
        console.log(String.fromCharCode(str.charCodeAt(0)+32))
    }else if(str>='a' && str<='z'){
        console.log(String.fromCharCode(str.charCodeAt(0)-32))
    }else{
        console.log("Please enter correct str")
    }
}

print('a')