// 1.Write a program which accept one number from user and print that number of 
// even numbers on screen. 
// Input :  7
// Output:  2 4 6 8 10 12 14

function PrintEvenNumber(num){
    let count=0;
    for(let i=1;count!=num;i++){
        if(i%2==0){
            console.log("even numbers",i);
            count++;
        }
    }
}


PrintEvenNumber(7);