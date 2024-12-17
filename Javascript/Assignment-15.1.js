// 1. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 4  
// Output : * 
// * 
// iCol = 3  
// * 
//   * * *
//   * * *
//   * * *
  

function print(iRow,iCol) {
    for(let i=0;i<iRow;i++){
        let row = "";
        for(let j=0;j<iCol;j++){
            row =row+"* ";
        }
        console.log(row.trim(row))
    }
}

print(4,3)
