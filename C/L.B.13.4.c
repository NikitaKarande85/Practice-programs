/*4.Write a program which accept number from user
and return multiplication of all digits.
Input :  2395  Output :  270
Input :  1018 Output :  8
Input :  9440 Output :  144
Input :  922432 Output :  864*/
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
    int r,y=1,count=0;
    while(a!=0)
    {
        r=a%10;
       if(r!=0)
       {
            y=y*r;
       }
        a=a/10;
    }
    printf("%d",y);
}
