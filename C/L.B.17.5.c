/*5. Accept number of rows and number of columns from user and display below pattern.
Input :  iRow = 4  iCol =  4
Output : 1 2 3 4
         2 3 4 5
         3 4 5 6
         4 5 6 7 */
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
     int i,j,k=1;
     for(i=1;i<=a;i++)
     {
         for(j=1;j<=b;j++)
         {
             printf("%d ",k);
              k++;
         }
          printf("\n");
          k=k-(b-1);
    }
}
