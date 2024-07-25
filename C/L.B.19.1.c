/*1. Accept number of rows and number of
columns from user and display below pattern.
Input :  iRow = 4  iCol = 4
Output : *
         * *
         * * *
         * * * *   */
#include<stdio.h>
void Fcall(int a,int b)
{
     int i,j,k;
     for(i=1;i<=a;i++)
     {
         for(j=1;j<=b;j++)
         {
             if(j<=i)
             {
                 printf("*");
             }
             else
             {
                 printf(" ");
             }

         }
         printf("\n");
     }
}

int main()
{
    int a,b;

    printf("Enter the Row: ");
    scanf("%d",&a);

    printf("Enter the column: ");
    scanf("%d",&b);

    Fcall(a,b);
    return 0;
}
