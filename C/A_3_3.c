// 3. Write a program which accept number from user and print even factors of that 
// number. 
// Input : 36
// Output: 2 6 12 18
#include<stdio.h>
void PrintEvenFact(int No1)
{
    int i=0;
    for(i=1;i<=No1/2;i++)
    {
        if(No1%i==0)
        {
            if(i%2==0)
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