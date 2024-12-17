// 4. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :  
// iRow = 3  
// iCol = 5  
// Output : 
//   3 3 3 3 3 
//   2 2 2 2 2 
//   1 1 1 1 1 


function print(iRow, iCol) {
    let baseCharCode=65
    for(let i=iRow; i>0; i--){
        let row="";
        for(let j=0;j<iCol;j++){
            row=row+i+" "
        }
        console.log(row.trim())
    }
}

print(4, 4)
