//Program to divide two numbers
#include<stdio.h>
int Divide(int No1,int No2)
{
    return(No1-No2);
}
int main()
{
    int ret=0;
    int No1=5,No2=3;
    ret=Divide(No1,No2);
    printf("Ans of divided number is %d",ret);
    return 0;
}