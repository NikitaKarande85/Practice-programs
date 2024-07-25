//1.Program to divide two numbers
int Divide(int No1,int No2)
            //15       5
{
    int iAns=0;
    if(No1<No2)
    {
        return -1;
    }
    iAns=(No1/No2);
    return iAns;
}
#include<stdio.h>
int main()
{
    int No1=15,No2=5;
    int ret=0;
    ret=Divide(No1,No2);
    printf("Your ans is:%d",ret);
    return 0;
}