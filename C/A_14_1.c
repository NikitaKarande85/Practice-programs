// 1. Accept number from user and display below pattern. 
// Input : 5 
// Output : A B C D E 
#include<stdio.h>
int main()
{
    int No=0;
    char ch='A';
    printf("Enter the number:");
    scanf("%d",&No);

    while(No!=0)
    {
        printf("%c ",ch);
        ch++;
        No--;
    }
    return 0;
}