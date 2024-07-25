/*3. Write a program which accept
string from user and copy capital characters
 of that string into another string.
Input :   “Marvellous Multi OS”
Output :   “MMOS”   */
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
    if(srr==NULL)
    {
        return NULL;
    }
    *ptr=brr;
    while(*srr!='\0')
    {
        if(*srr>='A'&&*srr<='Z')
        {
            *brr=*srr;
             brr++;
        }

        srr++;
    }
    *brr='\0';
    printf("%s",*ptr);

}
