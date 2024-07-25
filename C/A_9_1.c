// 1.Write a program which accept number from user and display below pattern. 
// Input : 5 
// Output : * * * * * # # # # # 
// Input : 6 
// Output : * * * * * * # # # # # # # 
// Input : -5 
// Output : * * * * * # # # # # 
// Input : 2 
// Output : * * # # 

#include<stdio.h>
int main()
{
    int No=0,i=0;
    printf("Enter the one value:");
    scanf("%d",&No);
    
    for(i=1;i<=No;i++)
    {
        printf("* ");
    }
    for(i=1;i<=No;i++)
    {
        printf("# ");
    }
    return 0;
}