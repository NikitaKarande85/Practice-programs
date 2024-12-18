// . Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 4  
// iCol = 4  
// Output :
//   2 4 6 8  
//   1 3 5 7 
//   2 4 6 8  
//   1 3 5 7 


function print(iRow, iCol) {
    for (let i = 1; i <= iRow; i++) {
        let row = "";
        if (i % 2 === 0) {
            let num = 1;
            for (let j = 1; j <= iCol; j++) {
                row += num + " ";
                num += 2;
            }
        } else {
            let num = 2;
            for (let j = 1; j <= iCol; j++) {
                row += num + " ";
                num += 2;
            }
        }
        console.log(row.trim());
    }
}

print(4, 4);

