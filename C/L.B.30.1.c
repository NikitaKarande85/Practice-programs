/*1.Write a program which accept string
from user and copy the contents of that
string into another string.
(Implement strcpy() function)
Input :   “Marvellous Multi OS”
Output :   “Marvellous Multi OS”
in another string   */
#include<stdio.h>
#include<string.h>
int main()
{
    char a;
    char srr[30]="Marvellous Multi OS";
    char brr[30];
    funcall(srr,brr);
    return 0;
}
int funcall(char *srr,char *brr)
{
    int *ptr;
    if(srr==NULL)
    {
        return NULL;
    }
    *ptr=brr;
    while(*srr!='\0')
    {
        *brr=*srr;
        brr++;
        srr++;
    }
    *brr='\0';
    printf("%s",*ptr);

}
