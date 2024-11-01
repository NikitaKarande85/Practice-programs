
// 4. Accept two numbers from user and display first number in second 
// number of times.  
// Input :  
// 12 5 
// Output : 12 12 12 12 12 
// Input :  -2 3 
// Output : -2 -2 -2  
// Input :  
// 21 -3 
// Output : 21 21 21  
// Input :  
// Output : 


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter your first name", (input1) => {
    if (isNaN(input1)) {
        console.log("Please enter valid number")
        return -1;
    }
    readline.question("Enter your secound number", (input2) => {
        if (input2 < 0) {
            input2 = -input2;
        }
        for (let i = 0; i < input2; i++) {
            console.log(input1)
        }

    })
})