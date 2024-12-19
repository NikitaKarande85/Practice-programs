// 3. Accept N numbers from user and accept one another number as NO , 
// return index of last occurrence of that NO. 
// Input :     
// NO:   66 
// Elements : 85 66 3 66 93 88  
// Output : 3 

function print(No, arr) {
    for(let i=arr.length;i>0;i--){
        if(No==arr[i]){
            return i;
        }
    }
}

let No=66;
let arr=[2,4,7,9,66,25,66]
const result=print(No,arr);
console.log("result",result);

