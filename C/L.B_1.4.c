//4. Accept one number and check whether is is divisible by 5 or not.
#include<stdio.h>
typedef int bool;
#define true 1
#define false 2
int main()
{
    int iValue1=0;
    bool bRet=false;
    printf("Enter the number\n");
    scanf("%d",&iValue1);

    bRet=check(iValue1);
    if(bRet==false)
    {
        printf("\nNot Divide by 5\n");
    }
    else
    {
        printf("\nDivide by 5\n");
    }
}
int check(int No)
{
    if((No%5)==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
