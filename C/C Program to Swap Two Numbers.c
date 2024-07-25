//C Program to Swap Two Numbers
#include<stdio.h>
int main()
{
    int No1=0,No2=0,temp=0;
    printf("Enter the one number\n");
    scanf("%d",&No1);

    printf("Enter the second number\n");
    scanf("%d",&No2);
    
    printf("before swap:No1=%d No2=%d\n",No1,No2);
    
    temp=No1;
    No1=No2;
    No2=temp;

    printf("After swap:No1=%d No2=%d",No1,No2);
    return 0;
}