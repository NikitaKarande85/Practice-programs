/*5. Write a program which accept string from user and
replace each occurrence of first character of each word
 into capital case.
Input :   “marvellous infosystems by Piyush khairnar”
Output :  “Marvellous Infosystems By Piyush Khairnar” */
#include<stdio.h>
int main()
{
    int ans;
    char srr[300]="marvellous infosystems by Piyush khairnar";
    funcall(srr);
    return 0;
}
int funcall(char *str)
{
    int len,i=0;
    len=strlen(str);
    while(i<=len)
    {
        if(i==0)
        {
            if(str[i]>='a'&&str[i]<='z')
            {
                str[i]=str[i]-32;
            }
        }
            if(str[i]==' ')
            {
                if(str[i+1]>='a'&&str[i+1]<='z')
                {
                    str[i+1]=str[i+1]-32;
                }
            }

        i++;
    }
    printf("%s",str);

}
