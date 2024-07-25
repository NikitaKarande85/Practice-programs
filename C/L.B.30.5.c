/*5. Write a program which 2 strings from user and
concat second string after first string.
(Implement strcat() function).
Input :   “Marvellous Infosystems”
          “Logic Building”
Output :  “Marvellous Infosystems Logic Building”*/
#include<stdio.h>
int main()
{
    char a;
    char srr[50]="Marvellous Multi OS";
    char brr[50]="Logic Building";
    funcall(srr,brr);
    return 0;
}
int funcall(char *srr1,char *brr2)
{
    int i=0;
    int j=strlen(srr1);

    for(i=0;brr2[i];i++)
    {

        srr1[j+i]=brr2[i];
    }
    srr1[j+i]='\0';
    printf("%s",srr1);
    return 0;

}
