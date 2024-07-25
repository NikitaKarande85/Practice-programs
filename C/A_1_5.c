// 5. Accept one number from user and print that number of * on screen. 
#include<stdio.h>
void Pattern(int No1)
{
    while(No1!=0)
    {
        printf("* ");
        No1--;
    }
}
int main()
{
    int No1=0;
    printf("Enter the number:");
    scanf("%d",&No1);
    Pattern(No1);
    return 0;
}