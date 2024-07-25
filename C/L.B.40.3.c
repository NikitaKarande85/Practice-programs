/*3.Write a program which number from user and display below pattern.
Input :   7846
Output :   7 8 4 6
           7 8 4
           7 8
           7  */
#include<stdio.h>
int main()
{
    int a;

    printf("Enter the Number: ");
    scanf("%d",&a);

    funcall(a);
    return 0;
}
int funcall(int a)
{
     int i,j,k;
     for(i=1;i<=a;i++)
     {
         for(j=1;j<=b;j++)
         {
             if(j<=b-i)
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
