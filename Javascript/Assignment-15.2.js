// 2. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 4  
// Output : 1 
// 2 
// iCol = 3  
// 3 
//   1 2 3
//   1 2 3
//   1 2 3
  

function print(iRow,iCol) {
    for(let i=0;i<iRow;i++){
        let row = "";
        for(let j=1;j<=iCol;j++){
            row =row+j + " ";
        }
        console.log(row.trim())
    }
}

print(4,3)
