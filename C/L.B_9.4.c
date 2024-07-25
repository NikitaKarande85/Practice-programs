/*4. Write a program to find odd factorial
of given number.
Input :  5
Output :  15   (5 * 3 * 1)
Input :  -5
Output :  15   (5 * 3 * 1)
Input :  10
Output :  945  (9 * 7 * 5 * 3 * 1)*/
#include<stdio.h>
int main()
{
    int no1=0,no2;
    printf("Enter the number");
    scanf("%d",&no1);
    no2=display(no1);
    printf("your ans is %d",no2);
}
int display(int no)
{
    int i=0,f=1;
    for(i=1;i<=no;i++)
    {
        if(i%2!=0)
        {
            f=f*i;
        }
    }
    return f;
}
