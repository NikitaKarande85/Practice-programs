// 5. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iCol =  4 
// iRow = 3  
// Output :    
//   1 1 1 1
//   2 2 2 2 
//   3 3 3 3 
//   4 4 4 4 


function print(iRow, iCol) {
    for (let i = 1; i <= iRow; i++) {
        let row = ""
        for (let j = 0; j < iCol; j++) {
            row=row+i+" "
        }
        console.log(row.trim())
    }
}

print(4, 4)
