/*5.Write a program which accept two strings
 from user and concat second string at the end
 of first string in reverse order.
Input :   “Marvellous”    “Python”
Output :   MarvellousnohtyP    */
#include<stdio.h>
int main()
{
    char srr[300]="Marvellous";
    char brr[300]="Python";
    funcall(srr,brr);

    return 0;
}
int funcall(char *str,char *brr)
{
    int len,i=0,len2;
    len=strlen(brr);
    char *ptr=brr;
    for(i=len-i;i>=0;i--)
    {
        printf("%c",ptr[i]);
    }
    len2=strlen(str);
    for(i=0;ptr[i];i++)
    {
        str[len2+i]=ptr[i];
    }
    str[len2+i]='\0';
    printf("%s",str);
}
