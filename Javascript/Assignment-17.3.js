// 3. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 5  
// iCol = 3  
// Output :
//   1 2 3 4 5 
//   a b c d e 
//   1 2 3 4 5 


function print(iRow, iCol) {
    for (let i = 1; i <= iRow; i++) {
        let row = "";
        if (i % 2 === 0) {
            let num = 1;
            for (let j = 1; j <= iCol; j++) {
                row += j + " ";
            }
        } else {
            let num = 'a';
            for (let j = 0; j < iCol; j++) {
                row += String.fromCharCode(num.charCodeAt(0)+j) + " ";
            }
        }
        console.log(row.trim());
    }
}

print(4, 4);

