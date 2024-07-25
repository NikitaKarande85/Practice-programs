/*2.Write a program which accept string from
user and convert it into upper case.
Input :   “Marvellous Multi OS”
Output :   MARVELLOUS MULTI OS   */
#include<stdio.h>
int main()
{
    char a[20],ans;
    printf("Enter the string:\n");
    gets(a);
    funcall(a);
    return 0;
}
void funcall(char *a)
{
    int i,b;
        while(*a!='\0')
        {
            if(*a>='a'&&*a<='z')
             {
                *a=*a-32;
             }
            *a++;
        }
        printf("%s",b);
}
