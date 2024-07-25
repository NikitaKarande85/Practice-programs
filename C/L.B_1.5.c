//5. Accept one number from user and print that number of * on screen.
#include<stdio.h>
int main()
{
    int iValue=0;
    iValue=5;
    Accept(iValue);
    return 0;
}
int Accept(int iNo)
{
    int Cnt=1;
    for(Cnt=1;Cnt<=iNo;Cnt++)
    {
        printf("*");
    }
}
