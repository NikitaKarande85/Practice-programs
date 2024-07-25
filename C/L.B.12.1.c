/*1.Write a program which accept number from user and display its digits in reverse order.
Input :  2395
Output :
5
9
3
2
Input :  1018
Output :
8
1
0
1
Input :  -1018
Output :
8
1
0
1
Input :  9000
Output :
0
0
0
9*/
#include<stdio.h>
int main()
{
    int a;
    printf("Enter the value");
    scanf("%d",&a);

    funcall(a);

}
int funcall(int a)
{
     int rev=0;
     while(a!=0)
     {
        rev=rev*10;
        rev=rev+a%10;
        a=a/10;
    }
    printf("%d\n",rev);

}
