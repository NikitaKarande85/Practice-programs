/*1.Write a program which accept range from user and
 display all numbers in between that range.
Input :  23 35
Output :  23 24 25 26 27 28 29 30 31 32 33 34 35
Input :  10 18
Output :  10 11 12 13 14 15 16 17 18
Input :  10 10
Output :  10
Input :  -10 2
Output :  -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2*/
#include<stdio.h>
int main()
{
    int start=0,end=0;
    printf("Enter the start value:");
    scanf("%d",&start);
    printf("Enter the end value");
    scanf("%d",&end);
    displayfun(start,end);
    return 0;
}
void displayfun(no1,no2)
{
    if(no1<no2)
    {
        while(no1<=no2)
        {
            printf("%d ",no1);
            no1++;
        }
    }
    else if(no1>no2)
    {
        while(no1>=no2)
        {
            printf("%d ",no2);
            no2++;
        }
    }
    else
    {
        printf("%d ",no1);
    }
}
