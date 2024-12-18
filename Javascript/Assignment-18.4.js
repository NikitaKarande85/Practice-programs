// 4. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :  
// iRow = 6  
// iCol = 5  
// Output : 
// * * * * * 
// * @ @ @ * 
// * @ @ @ * 
// * @ @ @ * 
// * * * * * 


function print(iRow, iCol) {
    for (let i = 1; i <= iRow; i++) {
        let row = "";
        for (let j = 1; j <= iCol; j++) {
            if( i==1 || j==1 || i==iRow || j==iCol){
                row=row+"* "
            }else{
                row=row+"@ "
            }
        }
        console.log(row.trim())
    }
}

print(4, 4);

