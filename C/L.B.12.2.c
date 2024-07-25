/*2.Write a program which accept number from user and check whether it contains 0 in it or not.
Input :  2395
Output :  There is no Zero
Input :  1018
Output :  It Contains Zero
Input :  9000
Output :  It Contains Zero
Input :  10687
Output :  It Contains Zero */
#include<stdio.h>
#define TRUE 1
#define FALSE 0
typedef int BOOL;
int funcall(int a)
{
    int r=0,y=0;
    while(a!=0)
    {
         r=a%10;
         if(r==0)
         {
             return TRUE;
         }
         y=y*10+r;
         a=a/10;
    }
}
int main()
{
    int a=0;
    BOOL i=FALSE;
    printf("Enter the value");
    scanf("%d",&a);

    i=funcall(a);
    if(i==TRUE)
    {
        printf("it contain zero");
    }
    else
    {
        printf("it contains no zero");
    }
    return 0;
}




