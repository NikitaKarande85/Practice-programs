// 2. Accept number of rows and number of columns from user and display 
// below pattern. 
// Input : iRow = 4 iCol = 4 
// Output : 
//  2 4 6 8 10 
//  1 3 5 7 9 
//  2 4 6 8 10 
//  1 3 5 7 9 
#include<stdio.h>
int no1=2,no2=1;
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
            if(i%2!=0)
            {
                printf("%d ",no1);
                no1++;
                no1++;
            }
            else{
                printf("%d ",no2);
                no2=no2+2;
            }
        }
        no1=2;
        no2=1;
        printf("\n");
    }
    return 0;
}