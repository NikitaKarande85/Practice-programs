//5. Accept number from user and check whether number is even or odd.
#include<stdio.h>
#define true 1
#define false 2
int typedef bool;
int main()
{
    int iValue=0;
    bool bRet=false;
    printf("Enter the number\n");
    scanf("%d",&iValue);
    bRet=chkEven(iValue);
    if(bRet==true)
    {
        printf("your number is Even\n");
    }
    else
    {
        printf("your number is Odd\n");
    }
}
int chkEven(int no)
{
    if(no%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
