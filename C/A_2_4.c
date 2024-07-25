// 5. Accept number from user and check whether number is even or 
// odd. 
typedef int bool;
#define true 1
#define false 0
#include<stdio.h>
bool Chk(int No1)
{
    if(No1%2!=0)
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
    bret=Chk(No1);
    if(bret==true)
    {
        printf("odd");
    }
    else
    {
        printf("Even");
    }
    return 0;
}