// 3. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :  
// iRow = 3  
// iCol = 5
// Output : 
//   A A A A A  
//   B B B B B 
//   C C C C C 


function print(iRow, iCol) {
    let baseCharCode=65
    for(let i=0; i<iRow; i++){
        let row="";
        for(let j=0;j<iCol;j++){
            row=row+String.fromCharCode(baseCharCode+i)+" "
        }
        console.log(row.trim())
    }
}

print(4, 4)
