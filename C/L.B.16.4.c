/*4. Accept number of rows and number of
columns from user and display below pattern.
Input :  iRow = 4  iCol = 5
Output : 4 4 4 4 4
         3 3 3 3 3
         2 2 2 2 2
         1 1 1 1 1  */
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
     for(i=1;a>=i;a--)
     {
         for(j=1;j<=b;j++)
       {
           if(j<=b)
           printf("%d\t",a);
        }
       printf("\n");
     }

}
