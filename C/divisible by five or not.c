// Accept one number and check whether is is divisible by 5 or not.
#include<stdio.h>
typedef int bool;
#define true 1
#define false 0
bool ChkDivisible(int No1)
{
    if(No1%5==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
int main()
{
    int No1=0;
    bool bRet=false;
    printf("Enter the one number");
    scanf("%d",&No1);
    bRet=ChkDivisible(No1);
    if(bRet==true)
    {
        printf("Divisible 5");
    }
    else
    {
        printf("Not Divisible 5");
    }
    return 0;
}