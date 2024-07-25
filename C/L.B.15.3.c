/*3. Accept number of rows and number of columns
from user and display below pattern.
Input :  iRow = 3  iCol = 5
Output : 5 4 3 2 1
         5 4 3 2 1
         5 4 3 2 1    */
#include<stdio.h>
int main()
{
    int a,b;

    printf("Enter the Row: ");
    scanf("%d",&a);

    printf("Enter the column: ");
    scanf("%d",&b);

    funcall(a,b);
    return 0;
}
int funcall(int a,int b)
{
     int i,j;
     for(i=1;i<=a;i++)
     {
       for(j=b;j>=1;j--)
       {
           printf("%d",j);
       }
       printf("\n");
     }

}
