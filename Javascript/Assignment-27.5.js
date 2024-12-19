// 5. Write a program which accept string from user and display it inn 
// reverse order. 
// Input :   
// Output :   
// “MarvellouS” 
// “SuollevraM” 

function print(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    console.log(reversedStr);
}

print("Marvellous");

