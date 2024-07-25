/*2. Write a program which accept range from user and display all even numbers in between that range.
Input :  23 35  Output :  24 26 28 30 32 34
 Input :  10 18 Output :  10 12 14 16 18
Input :  10 10 Output :  10
Input :  -10 2 Output :  -10 -8 -6 -4 -2 0 2
Input :  90 18 Output :  Invalid range */
#include<stdio.h>
int main()
{
    int a,b;
    printf("Enter the no1\t");
    scanf("%d",&a);

    printf("Enter the no2\t");
    scanf("%d",&b);

    funcall(a,b);
    return 0;
}
int funcall(int a,int b)
{
    if(a<=b)
    {
        while(a<=b)
        {
            if(a%2==0)
            {
                printf("%d\t",a);
            }
             a++;
        }
    }
    else
    {
        printf("Invalid value");
    }
}
