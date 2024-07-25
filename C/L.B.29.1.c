/*1.Write a program which accept string from
 user and accept one character. Check whether
 that character is present in string or not.
Input :   “Marvellous Multi OS”    e
Output :   TRUE
Input :   “Marvellous Multi OS”    W
Output :   FALSE    */

#include<stdio.h>
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char *str,char b)
{
    int i,c=0;
    while(*(str+i))
    {
         if(*(str+i)==b)
         {
             c++;
         }
         *str++;
    }
    if(c!=0)
    {
        return TRUE;
    }
    else
    {
        return FALSE;
    }
}
int main()
{
    char a[20],ans,b;
    BOOL bRet = FALSE;
    printf("Enter the string:\n");
    gets(a);

    printf("Enter the character:\n");
    scanf("%c",&b);

    ans=funcall(a,b);
    if(ans==TRUE)
    {
        printf("Character is found");
    }
    else
    {
        printf("character is not found");
    }
}
