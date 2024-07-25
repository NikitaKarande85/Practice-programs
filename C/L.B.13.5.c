/*5.Write a program which accept number from user and return
difference between summation of even digits and summation of odd digits.
Input :  2395  Output :  -15 (2 - 17)
Input :  1018 Output :  6 (8 - 2)
Input :  8440 Output :  16  (16 - 0)
Input :  5733 Output :  -18 (0 - 18)*/
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
    int r,y=1,z=1,count=0;
    while(a!=0)
    {
        r=a%10;
        if(r%2==0)
        {
            y=y+r;
        }
        else
        {
            z=z+r;
        }
         count=(y-z);
        a=a/10;
    }
    printf("%d",count);
}
