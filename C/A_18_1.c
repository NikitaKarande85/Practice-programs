// 2. Accept number of rows and number of columns from user and display below 
// pattern. 
// Input : iRow = 4 iCol = 4 
// Output : 
//  * * * * 
//  * * * # 
//  * * # # 
//  * # # # 
#include<stdio.h>
int main()
{
    int No1=0,No2=0,i=0,j=0,k=0;
    printf("Enter the rows:");
    scanf("%d",&No1);

    printf("Enter the coloumn:");
    scanf("%d",&No2);

    for(i=1;i<=No1;i++)
    {
        k=1;
        for(j=1;j<=No2;j++)
        {
            if(j>(No2+k)-i)
            {
                printf("# ");
            }
            else{
                printf("* ");
            }
        }
        printf("\n");
    }
    return 0;
}