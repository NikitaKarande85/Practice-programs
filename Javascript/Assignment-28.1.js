// 5. Write a program which accept string from user and display it inn 
// reverse order. 
// Input :   
// Output :   
// “MarvellouS” 
// “SuollevraM” 

function print(str) {
    let arr=str.split(''); //convert string to arr

    let left=0;
    let right=arr.length-1;

    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    let reversedStr=arr.join('')
    console.log(reversedStr);
}

print("Marvellous");

