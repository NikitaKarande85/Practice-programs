/*4.Write a program which accept number
from user and count frequency of 4 in it.
Input :  2395  Output :  0
Input :  1018 Output :  0
Input :  9440 Output :  2
Input :  922432 Output :  1*/
#include<stdio.h>
int main()
{
    int a;
    printf("Enter the value");
    scanf("%d",&a);

    funcall(a);
    return 0;
}
int funcall(int a)
{
    int r,y,count=0;
    while(a!=0)
    {
        r=a%10;
        if(r==4)
        {
            count++;
        }
        y=y*10+r;
        a=a/10;
    }
    printf("%d",count);
}
