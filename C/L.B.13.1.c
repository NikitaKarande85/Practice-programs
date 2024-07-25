/*1.Write a program which accept number
 from user and return the count of even digits.
Input :  2395  Output :  1
Input :  1018 Output :  2
Input :  -1018 Output :  2
Input :  8462 Output :  4*/
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
        if(r%2==0)
        {
            count++;
        }
        y=y*10+r;
        a=a/10;
    }
    printf("%d",count);
}
