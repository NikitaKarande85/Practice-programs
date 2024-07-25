/*2. Write a program which accept range from user
and display all even numbers in between that range.
Input :  23 35
Output :  24 26 28 30 32 34
Input :  10 18
Output :  10 12 14 16 18
Input :  10 10
Output :  10
Input :  -10 2
Output :  -10 -8 -6 -4 -2 0 2
Input :  90 18
Output :  Invalid range*/
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
    while(no1<no2)
    {
        if(no1%2==0)
        {
            printf("%d ",no1);
        }
        ++no1;
    }
    while(no1>=no2)
    {
        if(no1%2==0)
        {
            printf("%d ",no2);
        }
         no2++;
     }

}

