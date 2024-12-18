// 5. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 4  
// iCol =  4
// Output : 
//   1 2 3 4  
//   2 3 4 5  
//   3 4 5 6  
//   4 5 6 7  


function print(iRow, iCol) {
    for (let i = 0; i < iRow; i++) {
        let row = "";
        let res=i;
        for (let j = 1; j <= iCol; j++) {
            
            row = row + (res+j) + "  "
        }
        res=res+i
        console.log(row.trim())
    }
}

print(4, 4);

