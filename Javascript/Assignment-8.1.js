// 1. Write a program which accept number from user and if number is less than 50 
// then print small , if it is greater than 50 and less than 100 then print medium, if it is 
// greater than 100 then print large.
//  Input : 75  
// Output : Medium 

function print(no) {
    if(no<50){
        console.log("Small")
    }else if(no>=50 && no<=100){
        console.log("medium")
    }else if(no>100){
        console.log('large')
    }else{
        console.log("other")
    }
}

print(130)
