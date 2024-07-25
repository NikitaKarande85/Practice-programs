// C Program to Check Armstrong Number
// 153 = 1^3 + 5^3 + 3^3
// 153 = 1 + 125 + 27
// 153 = 153 Not Armstrong
// 407 is armstrong

#include<stdio.h>
#include<math.h>
int ArmstrongNumChk(int iNo1)
{
    int iCopy,iCount=0,iSum=0,iRem=0;
    iCopy=iNo1;
    while(iCopy!=0)
    {
        iCount++;
        iCopy=iCopy/10;  
    }
   iCopy=iNo1;
    while(iCopy!=0)
    {
        iRem=iCopy%10;
        iSum+=pow(iRem, iCount);
        iCopy=iCopy/10;
    }
    return iSum;
}
int main()
{
    int iNo1=0;
    int iRet=0;
    printf("Enter the number:");
    scanf("%d",&iNo1);
    iRet=ArmstrongNumChk(iNo1);
    if(iRet==iNo1)
    {
        printf("Armstrong");
    }
    else
    {
        printf("Not Armstrong");
    }
}