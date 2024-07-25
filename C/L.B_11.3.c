/* 3. Write a program which accept range
 from user and return addition of all
 numbers in between that range.
 (Range should contains positive numbers only)
Input :  23 30
Output :  212
Input :  10 18
Output :  126
Input :  -10 2
Output :  Invalid range
Input :  90 18
Output :  Invalid range  */
#include<stdio.h>
int main()
{
    int start=0,end=0;
    printf("Enter the start value:");
    scanf("%d",&start);
    printf("Enter the end value");
    scanf("%d",&end);
    displayfun(start,end);
    return;
}
void displayfun(no1,no2)
{
    int add=0,a=0;
    if(no1>=0&&100>=no2)
    {
        while(no1<=no2)
    {
        a=(a+no1);
        no1++;
    }
     printf("%d ",a);
    }
    else
    {
        printf("invalid value");
    }

}
