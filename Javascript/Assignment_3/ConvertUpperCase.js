// 4. Accept one character from user and convert case of that character.  
// Input : a   
// Input : D   
// Output : A  
// Output : d  

// function ConvertUpperCase(ch){
//     if(ch==ch.toLowerCase()){
//         console.log(ch.toUpperCase())
//     }else{
//         console.log(ch.toLowerCase())
//     }
// }

function ConvertUpperCase(ch) {
    if (ch >= 'A' && ch <= 'Z') {
        console.log(String.fromCharCode(ch.charCodeAt(0)+32));
    } else if(ch>='a' && ch<='z') {
        console.log(String.fromCharCode(ch.charCodeAt(0)-32));
    }else{
        console.log("Please enter valid character")
    }
}

ConvertUpperCase('n');