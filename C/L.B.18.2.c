/*2. Accept number of rows and number
 of columns from user and display below pattern.
Input :  iRow = 4  iCol = 4
Output : * * * *
         * * * #
         * * # #
         * # # #  */
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
     for(i=0;i<=a;i++)
     {
         for(j=0;j<=b;j++)
         {
             if(j<=b-i)
             {
                 printf("*",k);
                 k++;
             }
             else
             {
                 printf("#",k);
                 k++;
             }

         }
          printf("\n");
    }
}
