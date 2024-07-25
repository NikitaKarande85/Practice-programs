// 1.Write a program which accept number from user and display its multiplication of 
// factors. 
// Input : 12 
// Output : 144 (1 * 2 * 3 * 4 * 6) 
// Input : 13 
// Output : 1 (1) 
// Input : 10 
// Output : 10 (1 * 2 * 5) 
#include<stdio.h>
int FactorMult(int No)
{
    int i=0,iMult=1;
    for(i=1;i<=No/2;i++)
    {
        if(No%i==0)
        {
            iMult=iMult*i;
        }
    }
    return iMult;
}
int main()
{
    int iNo1=0;
    int iRet=0;
    printf("Enter the number:");
    scanf("%d",&iNo1);
    iRet=FactorMult(iNo1);
    printf("Multiplication of factor is:%d",iRet);
    return 0;
}