/*1.Write a program which accept
string from user and count number of
 capital characters.
Input :   Marvellous Multi OS
Output :   4   */
#include<stdio.h>
int main()
{
    char arr[20],ans;
    printf("Enter the character:\n");
    scanf("%[^'\n']s",&arr);
    ans=funcall(arr);
    printf("%d",ans);
    return 0;
}
int funcall(char *str)
{
    int upper=0;

    while(*str!='\0')
    {
       if(*str>='A'&&*str<='Z')
       {
           upper++;
       }
       *str++;
    }
    return upper++;
}
