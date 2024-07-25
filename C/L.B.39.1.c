/*1.Write a program which accept two strings from
user and display length of both the strings.
Input :   “Marvellous”
          “Infosystems”
Output :   10 11  */
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
        count1++;
        i++;
    }
    while(brr[j]!='\0')
    {
        count2++;
        j++;
    }
    printf("first string length is %s:%d\n",str,count1);
    printf("Sec string length is %s:%d",brr,count2);

}
