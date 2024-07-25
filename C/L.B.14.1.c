/*1. Accept number from user and display below pattern.
Input :  5
Output : A B C D E*/
#include<stdio.h>
int main()
{
    int a;

    printf("Enter the value");
    scanf("%d",&a);

    funcall(a);
    return 0;
}
int funcall(int a)
{
        char i=65;
        while(a>0)
           {
              printf("%c\t",i);
              i++;
              a--;
           }
}
