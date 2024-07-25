// 2. Write a program which accept number from user and print even factors of that 
// number. 
// Input : 24
// Output: 1 2 4 6 8 12 
#include <stdio.h>
void PrintEvenFact(int No1)
{
    int i=0;
    for(i=1;i<=No1/2;i++)
    {
        if(No1%i==0)
        {
            printf("%d ",i);
        }
    }
}
int main()
{
    int No1 = 0;
    printf("Enter the one number:");
    scanf("%d",&No1);
    PrintEvenFact(No1);
    return 0;
}