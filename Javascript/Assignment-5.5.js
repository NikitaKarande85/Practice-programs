//5.Write a program which accept number from user and return difference between 
// summation of all its factors and non factors.  
// Input :  12 
// Output : -34  (16 - 50)
// Input :  10  
// Output : -29 (8 - 37) 

function print(no) {
    let fct = 0;
    let nonfct = 0;
    for (let i = 1; i <= no; i++) {
        if (no % i != 0) {
            nonfct += i;
        }
    }
    for (let i = 1; i <= no / 2; i++) {
        if (no % i == 0) {
            fct += i;
        }
    }
    return (fct - nonfct);
}

const result = print(10)

console.log("result", result);