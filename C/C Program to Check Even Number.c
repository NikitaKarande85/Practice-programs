//C Program to Check Even Number
#include<stdio.h>
int main()
{
    int No1=0;
    printf("Enter the one number");
    scanf("%d",&No1);

    if(No1%2==0)
    {
        printf("Even");
    }
    else{
        printf("Not Even");
    }
    return 0;
}