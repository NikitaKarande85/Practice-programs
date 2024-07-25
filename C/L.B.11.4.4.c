/*4.Write a program which accept range
 from user and return addition of all even
  numbers in between that range.
  (Range should contains positive numbers only)
Input :  23 30
Output :  108
Input :  10 18
Output :  70
Input :  -10 2
Output :  Invalid range
Input :  90 18
Output :  Invalid range */
#include<stdio.h>
int main()
{
    int a,b,ans=0;
    printf("Enter the no1\t");
    scanf("%d",&a);

    printf("Enter the no2\t");
    scanf("%d",&b);

    ans=funcall(a,b);
    printf("%d",ans);
}
int funcall(int a,int b)
{
    int c=0;
    if (a>0)
    {
        return 1;
    }
    else if(a>b)
    {
        return 1;
    }
    else
    {
         while(a<=b)
        {
            if(a%2==0)
            {
                c=c+a;
            }
            a++;
        }
        return c;
    }
}
