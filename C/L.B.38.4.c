/*4.Write a program which accept string from user and print below pattern.
Input :   “Marvellous”
Output :   M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S
           M A R V E L L O U S */
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
            if(str[j]>='a'&&str[j]<='z')
             str[j]=str[j]-32;
             printf("%c ",str[j]);
        }
        printf("\n");
    }
}
