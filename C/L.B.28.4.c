/*4. Write a program which accept
string from user and display only digits
from that string.
Input :   “marve89llous121”
Output :   89121
Input :   “Demo”
Output :            */
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
    int i,b=0,cont=0;
        while(*a!='\0')
        {
            if(*a>='1'&&*a<='9')
             {
                  b=*a*1;

             }

            *a++;
            printf("%c",b);
            b=0;
        }

}
