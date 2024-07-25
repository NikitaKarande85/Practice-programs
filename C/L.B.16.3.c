/*3. Accept number of rows and number of
columns from user and display below pattern.
Input :  iRow = 3  iCol = 5
Output : A A A A A
         B B B B B
         C C C C C   */
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
     int i,j,k;
      k='A';
     for(i=1;i<=a;i++)
     {
       for(j=1;j<=b;j++)
       {
           if(j<=b)
           {
               printf("%c",k);
           }
       }
       printf("\n");
       k++;
    }

}
