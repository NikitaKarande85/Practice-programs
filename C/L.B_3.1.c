/*1.Write a program which accept one number
from user and print that number of
even numbers on screen.
Input :  7
Output:  2 4  6  8  10  12  14 */
#include<stdio.h>
int main()
{
    int iValue=0;
    printf("Enter the Number");
    scanf("%d",&iValue);
    printeven(iValue);
    return 0;
}
int printeven(int no)
{
    int i=0;
    if (no<=0)
    {
        return;
    }
    while(no>0)
    {
        i=i+2;
        printf("%d ",i);
        no--;
    }




}
