// 4. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input :  
// iRow = 5   
// iCol = 5 
// Output : 
//  1  2  3  4  5
// -1 -2 -3 -4 -5   
//  1  2  3  4  5 
// -1 -2 -3 -4 -5 
//  1  2  3  4  5  


function print(iRow, iCol) {
   for(let i=1;i<=iRow;i++){
    let row="";
        if(i%2!=0){
            for(let j=1;j<=iCol;j++){
                row=row+j+"  "
            }
        }else{
            for(let j=1;j<=iCol;j++){
                row=row+(-j)+" "
            }
        }
        console.log(row.trim())
   }
}

print(4, 4);

