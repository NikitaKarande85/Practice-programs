// 1. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :  
// Output : 
// iRow = 4  
// iCol = 4  
//   *  
//   * *  
//   * * *  
//   * * * * 


function print(iRow, iCol) {
    for (let i = 1; i <= iRow; i++) {
        let row = "";
        for (let j = 1; j <= iCol; j++) {
            if(i>=j){
                row=row+"* "
            }
        }
        console.log(row.trim())
    }
}

print(4, 4);

