/*4. Write a program which accept string
 from user and copy small characters of that
 string into another string.
Input :   “Marvellous multi OS”
Output :   “arvellousmulti”    */
#include<stdio.h>
#include<string.h>
int main()
{
    char a;
    char srr[30]="Marvellous Multi OS";
    char brr[30];
    funcall(srr,brr);
    return 0;
}
int funcall(char *srr,char *brr)
{
    int *ptr;
    *ptr=brr;
    while(*srr!='\0')
    {
        if(*srr>='a'&&*srr<='z')
           {
               *brr=*srr;
               brr++;
           }
      srr++;
    }

    *brr='\0';
    printf("%s",*ptr);

}
