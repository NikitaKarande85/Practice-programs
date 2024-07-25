/*5.Write a program which accept string from user and print below pattern.
Input :   “Marvellous”
Output :  m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s
          m a r v e l l o u s    */
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
        for(j=0;j<=len;j++)
        {
            if(str[j]>='A'&&str[j]<='Z')
             str[j]=str[j]+32;
             printf("%c ",str[j]);
        }
        printf("\n");
    }
}
