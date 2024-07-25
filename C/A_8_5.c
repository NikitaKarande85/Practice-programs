// 5. Write a program which accept number from user and display its table in reverse 
// order. 
// Input : 2 
// Output : 20 18 16 14 12 10 8 6 4 2
// Input : 5 
// Output : 50 45 40 35 30 25 20 15 10 5 
// Input : -5 
// Output : 50 45 40 35 30 25 20 15 10 5 

#include<stdio.h>
int main()
{
    int No=0,i=0,iAns=0,icopy=0;
    printf("Enter the one value:");
    scanf("%d",&No);
    icopy=10*No;
    for(i=1;i<=10;i++)
    {
        printf("%d ",icopy);
        icopy=icopy-No;
    }
    return 0;
}