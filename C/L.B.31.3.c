/*3. Write a program which accept string from user
 and copy that characters of that string into another
 string by converting all small characters into capital case.
Input :   “Marvellous Python 2”
Output :   “MARVELLOUS PYTHON 2”  */
#include<stdio.h>
int main()
{
    char a;
    char srr[50]="Marvellous Python 2";
    char brr[50];
    funcall(srr,brr);

    return 0;
}
void funcall(char*srr,char*brr)
{
    int i=0,j=0,k;
    while(srr[i]!='\0')
    {
        if(srr[i]>='a'&&srr[i]<='z')
        {
            srr[i]=srr[i]-32;
        }
        i++;
    }
    brr[j]='\0';

    for(i=0;srr[i]!='\0';i++)
    {
        brr[i]=srr[i];
    }
    printf("%s",brr);
}
