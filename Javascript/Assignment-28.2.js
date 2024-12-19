// 5. Write a program which accept string from user and display it inn 
// reverse order. 
// Input :   
// Output :   
// “MarvellouS” 
// “SuollevraM” 

function print(str) {
    let arr=str.split(''); //convert string to arr
    
    let rev=arr.reverse()
    let reversedStr=rev.join('')
    console.log(reversedStr);
}

print("Marvellous");

