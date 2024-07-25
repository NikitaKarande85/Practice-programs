/*1. Write a program which accepts 2 strings from user and
 concat N characters of second string after first string.
 Value of N should be accepted from user.
 (Implement strncat() function).
 Note : If third parameter is greater than the size of second string
 then concat whole string after first string.
Input :   “Marvellous Infosystems”
          “Logic Building”
           5
Output :  “Marvellous Infosystems Logic” */
#include<stdio.h>
int main()
{
    char a[100]="Marvellous Infosystems";
    int c=0;
    char b[100]="Logic Building";

    printf("Enter the number:\n");
    scanf("%d",&c);
    functioncall(a,b,c);
    return 0;
}
int functioncall(char *srr1,char *brr,int c)
{
    int i=0,j=0,k=0,l;
    char *ptr=brr;
    j=strlen(srr1);
        while(brr[i]!='\0'&&c!=0)
           {
               srr1[j+i]=brr[i];
               i++;
               c--;
           }
          printf("%s",srr1);

}
