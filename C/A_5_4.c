// 4.Write a program which accept number from user and return summation of all its 
// non factors. 
// Input : 12 
// Output : 50 
// Input : 10 
// Output : 37 
#include <stdio.h>
int PrintEvenFact(int No1)
{
    int i=0,iSum=0;
    for(i=1;i<=No1;i++)
    {
        if(No1%i!=0)
        {
           iSum=iSum+i;
        }
    }
    return iSum;
}
int main()
{
    int No1 = 0,iSum=0;
    printf("Enter the one number:");
    scanf("%d",&No1);
    iSum=PrintEvenFact(No1);
    printf("You summation is %d",iSum);
    return 0;
}