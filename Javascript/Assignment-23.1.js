// 1. Accept N numbers from user and accept one another number as NO , 
// check whether NO is present or not. 
// Input :    
// NO:  66 
// Elements : 85 66 3 66 93 88  
// Output : TRUE 

function print(No, arr) {
    for(let n of arr){
        if(n==No){
            console.log("TRUE")
        }
    }
}

let No=66;
let arr=[2,4,7,9,66,25,3]
print(No,arr);

