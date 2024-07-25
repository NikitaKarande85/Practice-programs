// 5.Write a program which accept number from user and return difference between 
// summation of all its factors and non factors. 
// Input : 12 
// Output : 34 (16 - 50) 
// Input : 10 
// Output : 29 (8 - 37) 
#include<stdio.h>
int DiffFact(int No1)
{
    int i=0,iNotFactSum=0,iDiff=0,iFactSum=0;
    for(i=1;i<=No1;i++)
    {
        if(No1%i!=0)
        {
           iNotFactSum=iNotFactSum+i;
        }
    }
     for(i=1;i<=No1/2;i++)
    {
        if(No1%i==0)
        {
           iFactSum=iFactSum+i;
        }
    }
    iDiff=(iNotFactSum-iFactSum);
    return iDiff;
}
int main()
{
    int No=0,iDiff=0;
    printf("Enter the number:");
    scanf("%d",&No);
    iDiff=DiffFact(No);
    printf("Difference factore is %d",iDiff);
    return 0;
}