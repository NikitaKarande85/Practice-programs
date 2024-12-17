// 1. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :  
// iRow = 4  
// iCol = 4 
// Output : 
//   A B C D 
//   A B C D 
//   A B C D 
//   A B C D 


function print(iRow, iCol) {
    let str='A'
    for (let i = 0; i < iRow; i++) {
        let row = ""
        for (let j = 0; j < iCol; j++) {
            row=row+String.fromCharCode(str.charCodeAt(0)+j)+" "
        }
        console.log(row.trim())
    }
}

print(4, 4)
