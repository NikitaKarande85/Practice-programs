/*3. Write a program which accept
string from user and return difference
 between frequency of small characters and
 frequency of capital characters.
Input :   “MarvellouS”
Output :   6 (8-2)*/
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
       if(*str>='A'&&*str<='Z')
       {
           upper++;
       }
       if(*str>='a'&&*str<='z')
       {
           Lower++;
       }
       *str++;
    }
    ans=Lower-upper;
    return ans;
}
