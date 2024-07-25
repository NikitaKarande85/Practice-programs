/*1. Accept number of rows and number of columns
from user and display below pattern.
Input :  iRow = 4  iCol = 3
Output : * * *
         * * *
         * * *
         * * *    */
#include<stdio.h>
int main()
{
    int a,b;

    printf("Enter the Row:\t");
    scanf("%d",&a);

    printf("Enter the column:\t");
    scanf("%d",&b);

    funcall(a,b);
    return 0;
}
int funcall(int a,int b)
{
    int i,j;
   for(i=0;i<a;i++)
   {
       for(j=0;j<b;j++)
       {
           printf("*\t");
       }
       printf("\n");
    }

}
