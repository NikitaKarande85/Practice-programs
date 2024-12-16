//  1.Write a program which accept number from user and print that number of $ & *  on screen.    
// Input:5
// Output: $ * $ * $ * $ * $ *
// Input:3
// Output: $ * $ * $ * 
// Input:-3
// Output: $ * $ * $ * 
function print(no) {
   if(no<0){
      no=-no;
   }
   for(let i=0;i<no;i++){
      console.log("$")
      console.log("*")
   }
}

print(5)
