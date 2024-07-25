/*1. Accept Character from user and check
whether it is alphabet or not (A-Z a-z).
Input :  F
Output :  TRUE
Input :  &
Output :  FALSE  */
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char a)
{
    if(a>='a'&&a<='z'||a>='A'&&a<='Z' )
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
    char a='\0',ans;
    BOOL bRet = FALSE;
    printf("Enter the character:\n");
    scanf("%c",&a);

    ans=funcall(a);
    if(ans==TRUE)
    {
        printf("It is a character");

    }
    else
    {
        printf("Not it is a character");
    }
    return 0;
}
