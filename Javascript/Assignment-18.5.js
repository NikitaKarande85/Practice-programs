// 5. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :   
// iRow = 4  
// iCol =  4 
// Output : 
//   1 2 3 4
//   1 * * 4 
//   1 * * 4 
//   1 2 3 4 


function print(iRow, iCol) {
    for (let i = 1; i <= iRow; i++) {
        let row = "";
        for (let j = 1; j <= iCol; j++) {
            if( i==1 || j==1 || i==iRow || j==iCol){
                row=row+j+" "
            }else{
                row=row+"* "
            }
        }
        console.log(row.trim())
    }
}

print(4, 4);

