// 3. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input : iRow = 3 iCol = 5 
// Output : 
//  5 4 3 2 1
//  5 4 3 2 1 
//  5 4 3 2 1
#include<stdio.h>
int main()
{
    int No1=0,No2=0,i=0,j=0,iCopy=0;
    printf("Enter the rows:");
    scanf("%d",&No1);
    printf("Enter the coloumn:");
    scanf("%d",&No2);

    iCopy=No2;
    for(i=1;i<=No1;i++)
    {
        for(j=1;j<=iCopy;iCopy--)
        {
            printf("%d ",iCopy);
        }
        iCopy=No2;
        printf("\n");
    }
    return 0;
}