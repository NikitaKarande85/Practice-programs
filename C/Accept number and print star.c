// 5. Accept one number from user and print that number of * on screen. 
#include<stdio.h>
void StarPrint(int No1)
{
    int i=0;
    for(i=0;i<No1;i++)
    {
        printf("*\t");
    }
}
int main()
{
    int No1=0;
    printf("Enter the number");
    scanf("%d",&No1);
    StarPrint(No1);
    return 0;
}