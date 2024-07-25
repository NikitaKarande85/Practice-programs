//C Program to find Biggest of three numbers
#include<stdio.h>
int main()
{
    int No1=0,No2=0,No3=0;
    printf("Enter the number:");
    scanf("%d",&No1);

    printf("Enter the number:");
    scanf("%d",&No2);

    printf("Enter the number:");
    scanf("%d",&No3);

    if(No1>No2 && No1>No3)
    {
        printf("Largest number is:%d",No1);
    }
    else if(No2>No1 && No2>No3)
    {
        printf("Largest number is:%d",No2);
    }
    else
    {
        printf("Largest number is:%d",No3);
    }
}