/*2. Write a program which accept string from user and
copy that characters of that string into another string
by removing all white spaces.
Input :   “Marvel   lous Pyth   on”
Output :   “MarvellousPython”   */
#include<stdio.h>
int main()
{
    char a;
    char srr[50]="Marvel   lous Pyth   on";
    char brr[50];
    funcall(srr,brr);

    return 0;
}
void funcall(char*srr,char*brr)
{
    int i=0,j=0,k;
    while(srr[i]!='\0')
    {
        if(srr[i]!=' '&&srr[i+1]!=' ')
        {
            brr[j]=srr[i];
            j++;
        }
        i++;
    }
    brr[j]='\0';
    printf("%s",brr);
}
