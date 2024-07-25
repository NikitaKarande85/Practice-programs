/*3.Write a program which accept string
from user and print below pattern.
Input :   “Marvellous”
Output :   M
           M a
           M a r
           M a r v
           M a r v e
           M a r v e l
           M a r v e l l
           M a r v e l l o
           M a r v e l l o u
           M a r v e l l o u s   */
#include<stdio.h>
int main()
{
    int ans;
    char srr[300];
    printf("Enter the string:");
    gets(srr);
   funcall(srr);

    return 0;
}
int funcall(char *str)
{
    int len,i,j;
    len=strlen(str);
    for(i=0;i<len;i++)
    {
        for(j=0;j<=i;j++)
        {
             printf("%c ",str[j]);
        }
        printf("\n");
    }
}
