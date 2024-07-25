// 1.Write a program which accept number from user and display its digits in reverse 
// order. 
// Input : 2395 
// Output : 5 
//  9 
//  3 
//  2 
// Input : 1018 
// Output : 8 
//  1 
//  0 
//  1 
// Input : -1018 
// Output : 8 
//  1 
//  0 
//  1 
// Input : 9000 
// Output : 0 
//  0 
//  0 
//  9 
#include<stdio.h>
void Display(int No)
{
    int iRem=0;
    if(No<0)
    {
        No=-No;
    }
    while (No!=0)
    {
        iRem=No%10;
        printf(" %d\n",iRem);
        No=No/10;
    }
    
}
int main()
{
    int No=0;
    printf("Enter the number:");
    scanf("%d",&No);
    Display(No);
    return 0;
}