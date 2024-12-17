// 4. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 3  
// iCol = 4  
// Output : 
// * # * #  
// * # * #  
// * # * # 


function print(iRow, iCol) {
    for (let i = 0; i < iRow; i++) {
        let row = ""
        for (let j = 0; j < iCol; j++) {
            if (j % 2 == 0) {
                row = row + "* "
            }else{
                row=row+"# "
            }
        }
        console.log(row.trim())
    }
}

print(3, 4)
