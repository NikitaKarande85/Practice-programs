/*3.Write a program which accept number
 from user and return the count of digits in between 3 and 7.
Input :  2395  Output :  1
Input :  1018 Output :  0
Input :  4521 Output :  2
Input :  9922 Output :  0 */
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
        if(r==4||r==5||r==6||r==7)
        {
            count++;
        }
        y=y*10+r;
        a=a/10;
    }
    printf("%d",count);
}
