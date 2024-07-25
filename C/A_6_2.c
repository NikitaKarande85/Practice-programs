// 2. Write a program which accept one number from user and check whether that 
// number is greater than 100 or not.
// Input : 101 
//  Output : Greater 
//  Input : 39 
//  Output : Smaller 
#include<stdio.h>
int main()
{
    int No=0;
    printf("Enter the number:");
    scanf("%d",&No);
    if(100<No)
    {
        printf("Greater than 100");
    }
    else
    {
        printf("Smaller than 100");
    }
    return 0;
}