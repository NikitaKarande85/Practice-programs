/*4. Write a program which accept
string from user and check whether it
 contains vowels in it or not.
Input :   “marvellous”
Output :   TRUE
Input :   “Demo”
Output :   TRUE
Input :   “xyz”
Output :   FALSE */
#include<stdio.h>
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char *str)
{
    while(*str!='\0')
    {
        if(*str=='a'||*str=='e'||*str=='i'||*str=='o'||*str=='u'||*str=='A'||*str=='E'||*str=='I'||*str=='O'||*str=='U')
        {
            return TRUE;
        }
        *str++;
    }
}
int main()
{
    char a[20],ans;
    BOOL bRet = FALSE;
    printf("Enter the string:\n");
    scanf("%[^'\n']s",&a);

    ans=funcall(a);
    if(ans==TRUE)
    {
        printf("Contains Vowel");
    }
    else
    {
        printf("No contains Vowel");
    }
}
