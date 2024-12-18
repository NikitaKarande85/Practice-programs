// 1. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 4  
// iCol = 4  
// Output : 
//   1 2 3 4 
//   5 6 7 8 
//   9 1 2 3 
//   4 5 6 7 


function print(iRow, iCol) {
    let count=0;
    for(let i=0; i<iRow; i++){
        let row="";
        for(let j=0;j<iCol;j++){
            count++;
            row=row+count+" "
            if(count==9){
                count=0;
            }
        }
        console.log(row.trim())
    }
}

print(3, 4)
