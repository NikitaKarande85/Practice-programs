// 5. Accept N numbers from user and return product of all odd elements. 
// Elements : 15 66 3 70 10 88  
// Output : 45 

function print(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            result = result * arr[i];
        }
    }
    return result;
}

let arr = [15,66,3,70,10,88]
const result = print(arr);
console.log("result", result);

