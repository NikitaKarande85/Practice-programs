// 2. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :  
// iRow = 4  
// iCol = 4  
// Output : 
//   A B C D 
//   a b c d
//   A B C D 
//   a b c d


function print(iRow, iCol) {
    let str='A'
    for(let i=0; i<iRow; i++){
        let row="";
        let baseCharCode = (i % 2 === 0) ? 65 : 97; // Use 'A' (65) for even rows, 'a' (97) for odd rows
        for(let j=0;j<iCol;j++){
            row=row+String.fromCharCode(baseCharCode+j)+" "
        }
        console.log(row.trim())
    }
}

print(4, 4)
