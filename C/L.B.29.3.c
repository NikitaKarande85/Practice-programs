/*3.Write a program which accept
string from user and accept one character.
Return index of first occurrence of that
character.
Input :   “Marvellous Multi OS”    M
Output :   0
Input :   “Marvellous Multi OS”    W
Output :   -1
Input :   “Marvellous Multi OS”    e
Output :   4 */
#include<stdio.h>
int main()
{
    char a[20],ans=0,b=0;
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
    int i=0,flag=0;
   for(i=0;i<=strlen(str);i++)
   {
       if(str[i]==b)
       {
           flag++;
           break;
       }
   }
   if(flag==0)
   {
       return b;
   }
   else
   {
       return i;
   }

}

