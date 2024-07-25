/*2.Write a program which accept two strings
from user and display count of Capital characters
from both the strings.
Input :   “MarvelloUS”
          “InfoSystEMs”
Output :   3 4   */
#include<stdio.h>
int main()
{
    int ans;
    char srr[300],brr[300];
    printf("Enter 1st string:");
    gets(srr);
    printf("Enter 2nd string:");
    gets(brr);
   funcall(srr,brr);

    return 0;
}
int funcall(char *str,char *brr)
{
    int count1=0,count2=0,i=0,j=0;
    while(str[i]!='\0')
    {
        if(str[i]>='A'&&str[i]<='Z')
        {
            count1++;
        }
        i++;
    }
    while(brr[j]!='\0')
    {
        if(str[j]>='A'&&str[j]<='Z')
        {
            count2++;
        }
        j++;
    }
    printf("first string length is %s:%d\n",str,count1);
    printf("Sec string length is %s:%d",brr,count2);

}
