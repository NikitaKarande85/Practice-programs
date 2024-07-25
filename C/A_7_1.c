// 1.Write a program which accept number from user and print that number of $ & * 
// on screen. 
// Input : 5 
// Output : $ * $ * $ * $ * $ *
// Input : 3 
// Output : $ * $ * $ *
// Input : -3 
// Output : $ * $ * $ *
#include<stdio.h>
int main()
{
    int No=0,i=0;
    printf("Enter the one value:");
    scanf("%d",&No);

    for(i=1;i<=No;i++)
    {
        printf(" $ * ");
    }
    
    return 0;
}