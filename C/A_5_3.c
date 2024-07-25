// 3.Write a program which accept number from user and display all its non factors. 
// Input : 12 
// Output : 5 7 8 9 10 11 
// Input : 13 
// Output : 2 3 4 5 6 7 8 9 10 11 12 
// Input : 10 
// Output : 3 4 6 7 8 9 
#include <stdio.h>
void PrintEvenFact(int No1)
{
    int i=0;
    for(i=1;i<=No1;i++)
    {
        if(No1%i!=0)
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