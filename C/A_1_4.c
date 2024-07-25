// 4. Accept one number and check whether is is divisible by 5 or not.
#include<stdio.h>
typedef int bool;
#define true 1
#define false 0 
bool Divisible(int No1)
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
    bool bret=false;
    printf("Enter the one number:");
    scanf("%d",&No1);
    bret=Divisible(No1);
    if(bret==true)
    {
        printf("Divisible 5");
    }
    else
    {
        printf("Divisible not 5");
    }
    return 0;
}