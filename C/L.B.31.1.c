/*1. Write a program which accept string
 from user and copy that characters of that
  string into another string in reverse order.
Input :   “Marvellous Python”
Output :   “nohtyP suollevraM”   */
#include<stdio.h>
int main()
{
    char a;
    char srr[50]="Marvellous Python";
    char brr[50];
    funcall(srr,brr);

    return 0;
}
void funcall(char*srr,char*brr)
{
    char i=0,l,temp,j;
    for(i=0;srr[i]!='\0';i++)
    {
        brr[i]=srr[i];
    }
    brr[i]='\0';
    printf(" copy the string another == %s\n",brr);
    j=strlen(brr);
    for(i=j-1;i>=0;i--)
    {
        printf("%c",brr[i]);
    }

  /* for(l=0;brr[l];l++)
   {
       for(i=0;i<l/2;i++)
       {
           temp=brr[i];
           brr[i]=brr[l-1-i];
           brr[l-1-i]=temp;
       }
   }
   printf("%s",brr);*/
}

