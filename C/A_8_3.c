// 3.Write a program to find factorial of given number. 
// Input : 5 
// Output : 120 (5 * 4 * 3 * 2 * 1)
// Input : -5 
// Output : 120 (5 * 4 * 3 * 2 * 1)
// Input : 4 
// Output : 24 (4 * 3 * 2 * 1)
#include<stdio.h>
int main()
{
    int No=0,i=0,iSum=1;
    printf("Enter the one value:");
    scanf("%d",&No);

    if(No<0)
    {
        No=-No;
    }
    for(i=1;i<=No;i++)
    {
        iSum=iSum*i;
    }
    printf("%d",iSum);
    return 0;
}