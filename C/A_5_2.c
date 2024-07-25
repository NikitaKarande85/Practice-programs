// 2.Write a program which accept number from user and display its factors in 
// decreasing order. 
// Input : 12 
// Output : 6 4 3 2 1 
// Input : 13 
// Output : 1 
// Input : 10 
// Output : 5 2 1 
#include <stdio.h>
void PrintEvenFact(int No1)
{
    int i=0;
    int No2=No1/2;
    for(i=1;i<=No2;No2--)
    {
        if(No1%No2==0)
        {
            printf("%d ",No2);
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