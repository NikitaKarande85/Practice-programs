//1.Program to divide two numbers
#include<stdio.h>
int main()
{
    int iValue1=15,iValue2=5;
    int iRet=0;

    iRet=Divide(iValue1,iValue2);
    printf("your answer is %d",iRet);

    return 0;
}
int Divide(iValue1,iValue2)
{
    int iAns=0;

    if (iValue2==0)
    {
        return-1;
    }
    iAns=iValue1/iValue2;
    return iAns;
}
