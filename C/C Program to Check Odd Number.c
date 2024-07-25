// C Program to Check Odd Number
#include<stdio.h>
int main()
{
    int No1=0;
    printf("Enter the one number");
    scanf("%d",&No1);

    if(No1%2!=0)
    {
        printf("Odd");
    }
    else{
        printf("Not Odd");
    }
    return 0;
}