/*4. Accept sing from user and reverse the contents
 of that string by toggling the case.
Input :   “aCBdef”
Output :   “FEDcbA”   */
#include<stdio.h>
int main()
{
    char a;
    char srr[50]="Marvellous";
    funcall(srr);
    return 0;
}
int funcall(char *srr1)
{
    int i=0,len;
     len=strlen(srr1);
     for(i=len-i;i>=0;i--)
     {
         if(srr1[i]>='a'&&srr1[i]<='z')
          srr1[i]=srr1[i]-32;
         else
           srr1[i]=srr1[i]+32;
         printf("%c",srr1[i]);
     }

}
