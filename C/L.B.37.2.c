/*2. Write a program which accept string from user
and return length of largest word.
Input :   “Marvellous Multi OS Infosystems”
Output :   11    */
#include<stdio.h>
int main()
{
    int ans;
    char srr[300]="Marvellous Multi OS Infosystems";
   funcall(srr);
    return 0;
}
int funcall(char *str)
{
    int i=0,letters=0,count=0,max=0,j,index=0,length;
    char longe[30];
    length=strlen(str);
        for(i=0;i<length;i++)
        {
           if(str[i]!=' ')
           {
               count++;
           }
           else
           {
               if(count>max)
               {
                   max=count;
                   index=i-max;
               }
               count=0;
           }
        }
        if(count>max)
        {
            max=count;
            index=length-max;
        }
        j=0;
        for(i=index;i<index+max;i++)
        {
            longe[j]=str[i];
            j++;
        }
        longe[j]='\0';
        printf("%s\n",longe);
        printf("%d",max);
}
