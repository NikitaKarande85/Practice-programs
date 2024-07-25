/*1.Write a program which accept string from
 user count number of words from string
Input :   “Marvellous Multi OS”
Output :   3
Input :   “          Marvellous Multi            OS       Pune”
Output :   4   */
#include<stdio.h>
int main()
{
    int ans;
    char srr[300];
    printf("Enter the string:");
    gets(srr);
   ans=funcall(srr);
   printf("%d",ans);

    return 0;
}
int funcall(char *str)
{
    int count=0,i=0;
    char *p1=str;
    char *p2=str;
    while(*p1!='\0')
    {
        if(*p1==' ')
        {
            if(*p1!=*str)
            {
                *p2=*p1;
                p2++;
                p1++;
            }
            while(*p1==' ')
            {
                p1++;
            }
        }
        else
        {
            *p2=*p1;
            p2++;
            p1++;
        }
    }
    if(*(p2-1)==' ')
    {
        p2--;
    }
    *p2='\0';

     printf("%s\n",str);
    while(str[i]!='\0')
    {
        if(str[i]==' ')
        {
            count++;
        }
        i++;
    }
     return count+1;

}
