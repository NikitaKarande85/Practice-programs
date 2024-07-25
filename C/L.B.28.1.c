/*1.Write a program which accept string from
 user and convert it into lower case.
Input :   “Marvellous Multi OS”
Output :   marvellous multi os */
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
            if(*a>='A'&&*a<='Z')
             {
                *a=*a+32;
             }
            *a++;
        }
        printf("%s",b);
}
