/*2.Write a program which accept string from
user and accept one character. Return frequency
 of that character.
Input :   “Marvellous Multi OS”    M
Output :   2
Input :   “Marvellous Multi OS”    W
Output :   0    */
#include<stdio.h>
int main()
{
    char a[20],ans,b;
    printf("Enter the string:\n");
    gets(a);

    printf("Enter the character:\n");
    scanf("%c",&b);

    ans=functioncall(a,b);
    printf("%d",ans);
    return 0;
}
int functioncall(char*str,int b)
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
    return c;
}
