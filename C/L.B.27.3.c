/*2. Write a program which accept
string from user and count number of small characters.
Input :   “Marvellous”
Output :   9    */
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
    int upper=0,Lower=0,ans;

    while(*str!='\0')
    {
       if(*str>='a'&&*str<='z')
       {
           Lower++;
       }
       *str++;
    }
    return Lower;
}
