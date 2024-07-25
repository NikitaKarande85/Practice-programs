//1.Accept one number from user and print that number of * on screen.
#include<stdio.h>
int main()
{
    int iValue=0,iRet=0;
    printf("Enter the number");
    scanf("%d",&iValue);
    iRet=Display(iValue);
    return 0;
}
int Display(int No)
{
   // int var=0;
    while(1<=No)
    {
        printf("* ");
        No--;
    }
}


