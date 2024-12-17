//5. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input :  
// iRow = 3  
// iCol =  4  
// Output : 
// 1 2 3 4 
// 5 6 7 8 
// 9 10 11 12


function print(iRow, iCol) {
    let count=0;
    for(let i=0; i<iRow; i++){
        let row="";
        for(let j=0;j<iCol;j++){
            count++;
            row=row+count+" "
        }
        console.log(row.trim())
    }
}

print(3, 4)
