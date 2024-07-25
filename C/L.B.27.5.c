/*3. Write a program which accept string
from user and display it inn reverse order.
Input :   “MarvellouS”
Output :   “SuollevraM”   */
#include<stdio.h>
int main()
{


    char ch=0,s[50];
    int l=0,i=0;
     printf("Enter the character:\n");
     gets(s);
    for(l=0;s[l];l++);
   {
        for(i=0;i<l/2;i++)
       {
           ch=s[i];
           s[i]=s[l-1-i];
           s[l-1-i]=ch;
       }
   }
 printf("%s",s);
}
