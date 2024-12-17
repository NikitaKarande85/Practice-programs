// 3. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 3 
// iCol = 5 
// Output :
//        5 4 3 2 1 
//        5 4 3 2 1 
//        5 4 3 2 1 
  

function print(iRow,iCol) {
    for(let i=0;i<iRow;i++){
        let row = "";
        for(let j=iCol;j>0;j--){
            row =row+j + " ";
        }
        console.log(row.trim())
    }
}

print(3,5)
