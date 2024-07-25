// 1. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input : iRow = 4 iCol = 3 
// Output : 
//  * * * 
//  * * * 
//  * * * 
//  * * *
#include<stdio.h>
int main()
{
    int No1=0,No2=0,i=0,j=0;
    printf("Enter the rows:");
    scanf("%d",&No1);

    printf("Enter the coloumn:");
    scanf("%d",&No2);

    for(i=1;i<=No1;i++)
    {
        for(j=1;j<=No2;j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}